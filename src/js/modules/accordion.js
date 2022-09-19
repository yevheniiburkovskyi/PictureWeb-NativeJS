function accordion() {
    const btns = document.querySelectorAll('.accordion-heading');

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            btns.forEach(item => {
                item.classList.remove('active-style');
                item.nextElementSibling.classList.remove('active-content');
                item.nextElementSibling.style.maxHeight = '0px';
            });
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
}

export default accordion;