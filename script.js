let tg = window.Telegram.WebApp

// получаем DOM-элемент слайдера
const sliderElem = document.querySelector('.slider');
// получаем его экземпляр класса ItcSlider
const slider = ItcSlider.getInstance(sliderElem);

let button_prev = document.querySelector(".itc-slider-btn itc-slider-btn-prev").OnClick = function() {
    slider.prev();
}
let button_next = document.querySelector(".itc-slider-btn itc-slider-btn-next").OnClick = function() {
    slider.next();
}