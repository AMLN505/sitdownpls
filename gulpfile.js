const { src, dest, series, watch, task } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-imagemin')
const webp = require('gulp-webp')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()
const sass = require('sass')
const gulpSass = require('gulp-sass')
const webpackStream = require('webpack-stream')
const ghPages = require('gulp-gh-pages');


const mainSass = gulpSass(sass);

const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**')
        .pipe(dest('dist/js'))
}

const fonts = () => {
    return src('src/fonts/**')
        .pipe(dest('dist/fonts'))
}

const stylesDev = () => {
    return src(['src/styles/**/*.scss',
        'src/styles/**/*.css'])
        .pipe(mainSass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/style'))
        .pipe(browserSync.stream())
}

const stylesBuild = () => {
    return src(['src/styles/**/*.scss',
        'src/styles/**/*.css'])
        .pipe(mainSass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist/style'))
}

const htmlMinifyDev = () => {
    return src('src/**/*.html')
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const htmlMinifyBuild = () => {
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/images'))
}

const scriptsDev = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: 'app.js',
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: "defaults"
                                }]
                            ]
                        }
                    }
                }]
            },
            devtool: 'source-map'
        }))
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
}

const scriptsBuild = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(webpackStream({
        mode: 'production',
        output: {
            filename: 'app.js',
        },
        module: {
            rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: "defaults"
                            }]
                        ]
                    }
                }
            }]
        },
        devtool: false
    }))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(dest('dist/js'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/images/**/*.jpg',
        'src/images/**/*.png',
        'src/images/**/*.jpeg',
        'src/images/*.svg'
    ])
        .pipe(image())
        .pipe(webp())
        .pipe(dest('dist/images'))
}

task('deploy', function() {
    return src('./dist/**/*')
      .pipe(ghPages());
  });

watch('src/**/*.html', htmlMinifyDev)
watch('src/styles/**/*.scss', stylesDev)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scriptsDev)
watch('src/resources/**', scriptsDev)

exports.dev = series(clean, resources, fonts, htmlMinifyDev, scriptsDev, stylesDev, images, svgSprites, watchFiles)
exports.build = series(clean, resources, fonts, htmlMinifyBuild, scriptsBuild, stylesBuild, images, svgSprites)
