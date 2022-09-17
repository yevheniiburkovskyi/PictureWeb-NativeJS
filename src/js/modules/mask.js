function mask(selector) {

    let inputs = document.querySelectorAll(selector);

    function createMask(event) {
        let matrix = '+38 (0__) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }
    inputs.forEach(item => {
        item.addEventListener('input', createMask);
    });
}

export default mask;