const heroSwiper = new Swiper(".hero__swiper", {
	spaceBetween: 0,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 8000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".hero__pagination",
		type: "bullets",
		clickable: true,
		slidesPerGroup: 1
	},
	a11y: {
		paginationBulletMessage: 'Перейти к слайду номер {{index}}'
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true
	},

	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	slideVisibleClass: "slide-visible",

	on: {
		init: function () {
			this.slides.forEach((slide) => {
				let button = slide.querySelector(".hero__slide-button")
				if (!slide.classList.contains("slide-visible")) {
					button.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					button.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		},
		slideChange: function () {
			this.slides.forEach((slide) => {
				let button = slide.querySelector(".hero__slide-button")
				if (!slide.classList.contains("slide-visible")) {
					button.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					button.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		}
	}
});

const specialSwiper = new Swiper(".special__swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 32,

	grid: {
		rows: 1,
		fill: "row"
	},

	navigation: {
		nextEl: ".special__swiper-button-next",
		prevEl: ".special__swiper-button-prev"
	},

	breakpoints: {
		767: {
			slidesPerGroup: 2,
			slidesPerView: 2,
		},

		1000: {
			slidesPerGroup: 3,
			slidesPerView: 3,
		},

		1350: {
			slidesPerGroup: 3,
			slidesPerView: 'auto',
		}
	},

	a11y: false,

	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	slideVisibleClass: "slide-visible",

	on: {
		init: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".special__button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		},
		slideChange: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".special__button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		}
	}
});

const usefulSwiper = new Swiper(".useful__swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 32,

	grid: {
		rows: 1,
		fill: "row"
	},

	navigation: {
		nextEl: ".useful__swiper-button-next",
		prevEl: ".useful__swiper-button-prev"
	},

	breakpoints: {
		767: {
			slidesPerGroup: 2,
			slidesPerView: 2,
		},

		1000: {
			slidesPerGroup: 3,
			slidesPerView: 3,
		},

		1350: {
			slidesPerGroup: 2,
			slidesPerView: 2,
		}
	},

	a11y: false,

	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	slideVisibleClass: "slide-visible",

	on: {
		init: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".useful__button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		},
		slideChange: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".useful__button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		}
	}
});

const catalogSwiper = new Swiper(".catalog__swiper", {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 16,

	grid: {
		rows: 3,
		fill: "row",
	},

	pagination: {
		el: ".catalog__swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},

	breakpoints: {
		767: {
			grid: {
				rows: 3,
				fill: "row",
			},
			spaceBetween: 32,
			slidesPerView: 2,
			slidesPerGroup: 2,
		},

		1000: {
			grid: {
				rows: 3,
				fill: "row",
			},
			slidesPerGroup: 3,
			slidesPerView: 3,
			spaceBetween: 32,
		}
	},

  a11y: {
		paginationBulletMessage: 'Перейти к слайду номер {{index}}'
	},

	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	slideVisibleClass: "slide-visible",

	on: {
		init: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".catalog-item__item-button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		},
		slideChange: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".catalog-item__item-button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		}
	}
});

const productSwiper = new Swiper(".product__swiper", {
	spaceBetween: 38,
	slidesPerView: 2,
	direction: 'horizontal',
	freeMode: true,
	watchSlidesProgress: true,

	breakpoints: {
		767: {
			direction: 'vertical',
			spaceBetween: 25,
			slidesPerView: 4,
		},

		1000: {
			spaceBetween: 38,
			slidesPerView: 4,
			direction: 'horizontal',
		}
	},
});

const productThumbsSwiper = new Swiper(".product__thumbs-swiper", {
	spaceBetween: 32,
	allowTouchMove: false,
	thumbs: {
		swiper: productSwiper,
	},
});

const similarSwiper = new Swiper(".similar__swiper", {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 16,

	grid: {
		rows: 1,
		fill: "row"
	},

	navigation: {
		nextEl: ".similar__swiper-button-next",
		prevEl: ".similar__swiper-button-prev"
	},

	breakpoints: {
		767: {
			slidesPerGroup: 2,
			slidesPerView: 2,
			spaceBetween: 32,
		},

		1000: {
			slidesPerGroup: 3,
			slidesPerView: 3,
			spaceBetween: 32,
		},

		1350: {
			slidesPerGroup: 4,
			slidesPerView: 4,
			spaceBetween: 32,
		}
	},

	a11y: false,

	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	slideVisibleClass: "slide-visible",

	on: {
		init: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".catalog-item__item-button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		},
		slideChange: function () {
			this.slides.forEach((slide) => {
				let link = slide.querySelector(".catalog-item__item-button")
				if (!slide.classList.contains("slide-visible")) {
					link.tabIndex = "-1";
					slide.ariaHidden = "true";
				} else {
					link.tabIndex = "";
					slide.ariaHidden = "false";
				}
			});
		}
	}
});

const dialogSwiper = new Swiper(".zoom__swiper", {
	spaceBetween: 85,
	slidesPerView: 1,
	slidesPerGroup: 1,
	freeMode: false,
	watchSlidesProgress: true,

	breakpoints: {
		767: {
			freeMode: false,
			spaceBetween: 85,
			slidesPerView: 2,
			slidesPerGroup: 2,
		},

		1000: {
			freeMode: false,
			spaceBetween: 85,
			slidesPerView: 3,
			slidesPerGroup: 3,
		},

		1350: {
			freeMode: true,
			spaceBetween: 55,
			slidesPerView: 4,
			slidesPerGroup: 4,
		}
	},

	navigation: {
		nextEl: ".zoom__swiper-button-next",
		prevEl: ".zoom__swiper-button-prev"
	},
});

const dialogThumbsSwiper = new Swiper(".zoom__thumbs-swiper", {
	spaceBetween: 32,
	allowTouchMove: false,
	thumbs: {
		swiper: dialogSwiper,
	},
});
