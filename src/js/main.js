import modal from "./modules/modals";


window.addEventListener('DOMContentLoaded', () => {
    modal(".button-design", ".popup-design", ".popup-close");
    modal(".button-consultation", ".popup-consultation", ".popup-close");
    modal(".fixed-gift", ".popup-gift", ".popup-close");
});