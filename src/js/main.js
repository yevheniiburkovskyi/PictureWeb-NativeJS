import modal from "./modules/modals";
import slider from "./modules/slider";
import form from "./modules/forms";
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import tabs from './modules/tabs';
import hover from './modules/hover';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal(".button-design", ".popup-design", ".popup-close");
    modal(".button-consultation", ".popup-consultation", ".popup-close");
    modal(".fixed-gift", ".popup-gift", ".popup-close");
    slider('.feedback-slider-item', "zoomIn", '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', "fadeInDown");
    form();
    mask('[name="phone"]');
    showMoreStyles('.button-styles', 'flipInX');
    tabs();
    hover();
});