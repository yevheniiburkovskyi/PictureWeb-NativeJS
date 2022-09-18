
function hover() {
    const blocks = document.querySelectorAll('.sizes-block');

    blocks.forEach((block, i) => {
        const blockImg = document.querySelectorAll('.sizes-block > img')[i];
        block.addEventListener('mouseenter', () => {
            blockImg.classList.add('animated', 'swing');
            blockImg.src = `assets/img/sizes-${i + 1}-1.png`;
            block.querySelectorAll('p').forEach((item, i) => {
                item.style.display = 'none';
                if (i == 3) {
                    item.style.display = 'block';
                }
            });
        });
        block.addEventListener('mouseleave', () => {
            blockImg.classList.remove('swing');
            blockImg.src = `assets/img/sizes-${i + 1}.png`;
            block.querySelectorAll('p').forEach(item => {
                item.style.display = 'block';
            });
        });
    });

}

export default hover;