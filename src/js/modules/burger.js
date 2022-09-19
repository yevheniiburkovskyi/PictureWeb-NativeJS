const burger = () => {
    const btn = document.querySelector('.burger'),
        menu = document.querySelector('.burger-menu');

    btn.addEventListener('click', () => {
        if (menu.style.display == 'none' && window.screen.availWidth < 993) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        menu.style.display = 'none';
    });
};

export default burger;