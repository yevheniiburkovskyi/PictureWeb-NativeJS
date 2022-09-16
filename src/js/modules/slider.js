const slider = (sliders, animationStyle, prevBtn, nextBtn) => {
    const slide = document.querySelectorAll(sliders);

    let slideIndex = 0;
    slide.forEach(item => {
        if (item != slide[slideIndex]) {
            item.style.display = "none";
        }
        item.classList.add("animated");
    });

    function showSlides() {
        slide.forEach(item => {
            item.style.display = "none";
        });
        slide[slideIndex].style.display = "block";
    }

    let showSlidesByIntervalActive = true;

    function showSlidesByInterval() {
        setInterval(() => {
            if (showSlidesByIntervalActive) {
                slideIndex++;
                if (slideIndex == slide.length) {
                    slideIndex = 0;
                    showSlides();
                } else {
                    showSlides();
                }
                slide[slideIndex].classList.add(animationStyle);
            }
        }, 5000);
    }
    showSlidesByInterval();

    slide[0].parentNode.addEventListener('mouseenter', () => {
        showSlidesByIntervalActive = false;
    });
    slide[0].parentNode.addEventListener('mouseleave', () => {
        showSlidesByIntervalActive = true;
    });

    try {
        const prev = document.querySelector(prevBtn),
            next = document.querySelector(nextBtn);

        next.addEventListener('click', () => {
            slideIndex++;
            if (slideIndex == slide.length) {
                slideIndex = 0;
                showSlides();
            } else {
                showSlides();
            }
            slide[slideIndex].classList.add(animationStyle);
        });
        prev.addEventListener('click', () => {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slide.length - 1;
                showSlides();
            } else {
                showSlides();
            }
            slide[slideIndex].classList.add(animationStyle);
        });
    } catch (err) {

    }
};


export default slider;