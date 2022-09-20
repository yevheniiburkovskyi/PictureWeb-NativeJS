const scrolling = () => {
    const upElem = document.querySelector('.pageup');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    //scrolling with raf (request animation frame)
    let links = document.querySelectorAll('[href^="#"]'), // собирает все ссылки со страницы
        speed = 0.1; // скорость прокрутки (чем меньше, тем быстрее прокрутка)

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop, // scrollTop возвращает количество пикселей, прокрученных от верха элемента
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, //возвращает размер элемента и его позицию относительно viewport (расстояние до него от верха в данном случае)
                start = null;

            requestAnimationFrame(step);

            function step(time) { // аргумент time передается автоматически
                if (start === null) { // проверяем первый ли раз запущена уже анимация
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)); //измеряем количество пикселей до объекта (вниз/вверх)
                document.documentElement.scrollTo(0, r); // прокрутка документа до указанных координат (x,y)

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash; //DOMString, содержащий '#' с последующим идентификатором.
                }
            }

        });
    });


};

export default scrolling;