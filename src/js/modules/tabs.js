const tabs = () => {
    const tabsBtn = document.querySelectorAll('.portfolio-menu > li'),
        tabsContent = document.querySelectorAll('.portfolio-block');

    function removeClass(arr, classSelector) {
        arr.forEach(item => {
            item.classList.remove(classSelector);
        });
    }

    tabsBtn.forEach((item, i) => {
        item.addEventListener('click', () => {

            removeClass(tabsBtn, 'active');

            item.classList.add('active');

            tabsContent.forEach(tab => {
                tab.classList.add('animated', 'flipInX');
                tab.style.display = 'none';
                document.querySelector('.portfolio-no').style.display = 'none';
                if (tab.classList.contains(item.classList[0]) || item.classList.contains('all')) {
                    tab.style.display = 'block';
                } else if (item.classList.contains('grandmother') || item.classList.contains('granddad')) {
                    document.querySelector('.portfolio-no').style.display = 'block';
                }
            });

        });
    });

};

export default tabs;