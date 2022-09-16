import modal from "./modules/modals";
import slider from "./modules/slider";
import form from "./modules/forms";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal(".button-design", ".popup-design", ".popup-close");
    modal(".button-consultation", ".popup-consultation", ".popup-close");
    modal(".fixed-gift", ".popup-gift", ".popup-close");
    slider('.feedback-slider-item', "zoomIn", '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', "fadeInDown");
    form();
});