const regionSelect = new Choices(document.querySelector('.header__region-select'), {
    searchEnabled: false,
    itemSelectText: "",
    position: "bottom",
});

const categorySelect = new Choices(document.querySelector('.header__category-select'), {
    searchEnabled: false,
    itemSelectText: "",
    position: "bottom",
    placeholder: true,
    placeholderValue: 'Категория',
});
