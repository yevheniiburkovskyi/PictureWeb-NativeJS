function showMoreStyles(trigger, animationStyle) {
    const btn = document.querySelector(trigger),
        items = document.querySelectorAll(".hidden-lg");

    btn.addEventListener('click', () => {
        items.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', animationStyle);
        });
        btn.remove();
    });
}

export default showMoreStyles;