function calc() {
    const size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        resultBox = document.querySelector('.calc-price');

    const getPrice = (e) => {
        let sum = Math.round(+size.value) * (+material.value) + (+options.value);

        if (size.value == '' || material.value == '') {
            resultBox.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (promocode.value === 'IWANTPOPART') {
            resultBox.textContent = 'Your price: ' + Math.round(sum * 0.7);
            resultBox.style.cssText = `font-size: 36px; font-weight: 600;`;
        } else {
            resultBox.textContent = 'Your price: ' + sum;
            resultBox.style.cssText = `font-size: 36px; font-weight: 600;`;
        }
    };

    size.addEventListener('change', getPrice);
    material.addEventListener('change', getPrice);
    options.addEventListener('change', getPrice);
    promocode.addEventListener('change', getPrice);


}

export default calc;