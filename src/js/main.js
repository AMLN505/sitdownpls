
//burger
document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header').classList.add('active')
    document.querySelector('.header__nav').classList.add('active')
    document.querySelector('.header__close').classList.add('active')
    document.querySelector('.header__menu-top').classList.add('active')
    if (window.innerWidth <= 768) {
        document.querySelector('.header__nav').style.height = window.innerHeight - 140 + 'px'
        document.querySelector('.header__menu-middle').style.height = document.querySelector('.header__nav').scrollHeight - document.querySelector('.header__menu-top').scrollHeight - 88 + 'px'
        document.body.classList.add('disable-scroll')
    }
    document.querySelector('.header__menu-top').style.top = document.querySelector('.header__nav').scrollHeight - document.querySelector('.header__menu-top').scrollHeight + 140 + 'px'
})

document.querySelector('.header__close').addEventListener('click', function () {
    document.querySelector('.header').classList.remove('active')
    document.querySelector('.header__nav').classList.remove('active')
    document.querySelector('.header__close').classList.remove('active')
    document.querySelector('.header__menu-top').classList.remove('active')
    document.body.classList.remove('disable-scroll')
})
document.querySelectorAll('.header__middle-link').forEach(function (toplink) {
    toplink.addEventListener('click', function () {
        document.querySelector('.header').classList.remove('active')
        document.querySelector('.header__nav').classList.remove('active')
        document.querySelector('.header__close').classList.remove('active')
        document.querySelector('.header__menu-top').classList.remove('active')
        document.body.classList.remove('disable-scroll')
    })
})

window.addEventListener('resize', () => {
    document.querySelector('.header__menu-top').style.top = document.querySelector('.header__nav').scrollHeight - document.querySelector('.header__menu-top').scrollHeight + 140 + 'px'
    if (window.innerWidth <= 768) {
        document.querySelector('.header__nav').style.height = window.innerHeight - 140 + 'px'
        document.querySelector('.header__menu-middle').style.height = document.querySelector('.header__nav').scrollHeight - document.querySelector('.header__menu-top').scrollHeight - 88 + 'px'
        if (document.querySelector('.header__nav').classList.contains('active')) {
            document.body.classList.add('disable-scroll')
        }
    }
    if (window.innerWidth > 768 && window.innerWidth <= 1000) {
        document.body.classList.remove('disable-scroll')
        document.querySelector('.header__nav').style.height = 300 + 'px'
        document.querySelector('.header__menu-middle').style.height = 148 + 'px'
    }
    if (window.innerWidth > 1000) {
        document.body.classList.remove('disable-scroll')
        document.querySelector('.header__nav').style.height = 'auto'
        document.querySelector('.header__menu-middle').style.height = 'auto'
    }
})

//tooltip
if (document.querySelector('.form__tooltip')) {
    tippy('.form__tooltip', {
        maxWidth: 160,
        offset: [0, 10],
        interactive: true,
        trigger: 'click',
        theme: 'form',
    })
}

// form-validation
if (document.querySelector('.form__form')) {
    const telMask = document.querySelector("input[type='tel']")
    const emailMask = document.querySelector('#email')

    Inputmask('+7 (999)-999-99-99').mask(telMask)
    Inputmask('email').mask(emailMask)

    const validation = new JustValidate('.form__form', {
        focusInvalidField: false,
    })

    const formButton = document.querySelector('.form__button')

    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Укажите имя',
            },
            {
                rule: 'customRegexp',
                value: /^[a-zа-яё ]+$/i,
                errorMessage: 'Недопустимый формат',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Минимум 2 символа',
            },
            {
                rule: 'maxLength',
                value: 20,
                errorMessage: 'Максимум 20 символов',
            },
        ])
        .addField('#tel', [
            {
                rule: 'required',
                errorMessage: 'Укажите номер',
            },
            {
                rule: 'function',
                validator: function () {
                    const phone = telMask.inputmask.unmaskedvalue()
                    return phone.length === 10
                },
                errorMessage: 'Введите 10 цифр',
            }
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Укажите email',
            }
        ])
        .addField('#checkbox', [
            {
                rule: 'required',
                errorMessage: ' ',
            }
        ])
        .onSuccess(() => {
            dialogSuccess.showModal()
            disableScroll()
        })
        .onFail(() => {
            formButton.disabled = true
        })
        .onValidate(() => {
            if (document.getElementsByClassName('just-validate-error-field').length == 0) {
                formButton.disabled = false
            }
        })
}

if (document.querySelector('.oneclick')) {
    const telMask = document.querySelector("input[type='tel']")

    Inputmask('+7 (999)-999-99-99').mask(telMask)

    const dialogValidation = new JustValidate('.oneclick__form', {
        focusInvalidField: false,
    })

    const formButton = document.querySelector('.oneclick__button')

    dialogValidation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Укажите имя',
            },
            {
                rule: 'customRegexp',
                value: /^[a-zа-яё ]+$/i,
                errorMessage: 'Недопустимый формат',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Минимум 2 символа',
            },
            {
                rule: 'maxLength',
                value: 20,
                errorMessage: 'Максимум 20 символов',
            },
        ])
        .addField('#tel', [
            {
                rule: 'required',
                errorMessage: 'Укажите номер',
            },
            {
                rule: 'function',
                validator: function () {
                    const phone = telMask.inputmask.unmaskedvalue()
                    return phone.length === 10
                },
                errorMessage: 'Введите 10 цифр',
            }
        ])
        .addField('#checkbox', [
            {
                rule: 'required',
                errorMessage: ' ',
            }
        ])
        .onSuccess(() => {
            dialogForm.close()
            setTimeout(() => {
                dialogSuccess.showModal()
                disableScroll()
            }, 300)
        })
        .onFail(() => {
            formButton.disabled = true
        })
        .onValidate(() => {
            if (document.getElementsByClassName('just-validate-error-field').length == 0) {
                formButton.disabled = false
            }
        })
}

//nouislider
if (document.getElementById('slider')) {
    const slider = document.getElementById('slider')

    noUiSlider.create(slider, {
        start: [2000, 150000],
        connect: true,
        handleAttributes: [
            { 'aria-label': 'Изменить нижний порог цен' },
            { 'aria-label': 'Изменить верхний порог цен' },
        ],
        step: 1,
        range: {
            'min': [1000],
            'max': [300000]
        }
    })

    let snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper')
    ]

    slider.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].value = values[handle].slice(0, -3)
    })

    document.getElementById('slider-snap-value-lower').addEventListener('change', function () {
        slider.noUiSlider.set([this.value, null])
    })

    document.getElementById('slider-snap-value-upper').addEventListener('change', function () {
        slider.noUiSlider.set([null, this.value])
    })
}


// dropdown
document.querySelectorAll(".filter__button").forEach(item => {
    item.addEventListener("click", function () {
        let btn = this
        let dropdown = this.parentElement.querySelector(".filter__list")

        document.querySelectorAll(".filter__button").forEach(el => {
            if (el != btn) {
                el.classList.remove("active")
            }
        })

        document.querySelectorAll(".filter__list").forEach(el => {
            if (el != dropdown) {
                el.classList.remove("active")
            }
        })

        dropdown.classList.toggle("active")
        btn.classList.toggle("active")
    })
})

document.addEventListener("click", function (e) {
    let target = e.target
    if (!target.closest(".catalog__filter-block")) {
        document.querySelectorAll(".filter__list").forEach(el => {
            el.classList.remove("active")
        })

        document.querySelectorAll(".filter__button").forEach(el => {
            el.classList.remove("active")
        })
    }
})

// modal

function enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto'
    document.body.classList.remove('disable-scroll')
    window.scroll({ top: pagePosition, left: 0 })
    document.body.removeAttribute('data-position');
}

function disableScroll() {
    let pagePosition = window.scrollY
    document.body.classList.add('disable-scroll')
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px'
}

for (const opener of document.querySelectorAll('.modal-opener')) {
    opener.addEventListener('click', () => {
        disableScroll()
    })
}

for (const modal of document.querySelectorAll('.modal')) {
    modal.addEventListener('close', () => {
        enableScroll()
        if (modal.querySelector('form')) {
            modal.querySelector('form').reset()
        }
    })

    modal.addEventListener("click", ({ currentTarget, target }) => {
        const dialogElement = currentTarget
        const isClickedOnBackDrop = target === dialogElement
        if (isClickedOnBackDrop) {
            dialogElement.close()
        }
    })
}

const dialogZoom = document.getElementById('dialogZoom')
const dialogForm = document.getElementById('dialogForm')
const dialogSuccess = document.getElementById('dialogSuccess')

if (dialogZoom) {
    document.querySelector('.product__thumbs-swiper').addEventListener('click', () => {
        window.dialogZoom.showModal()
    })

    closeModal(document.querySelector('.zoom__close'), dialogZoom)
}

if (dialogForm) {
    document.querySelector('.product__button').addEventListener('click', () => {
        window.dialogForm.showModal()
    })

    closeModal(document.querySelector('.oneclick__close'), dialogForm)
}

if (dialogSuccess) {
    closeModal(document.querySelector('.success__close'), dialogSuccess)
}

function closeModal(closer, modal) {
    closer.addEventListener('click', () => {
        modal.close()
    })
}

