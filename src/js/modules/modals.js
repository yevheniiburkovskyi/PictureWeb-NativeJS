
function openModal(window) {
    if (window.classList.contains("hide")) {
        window.classList.remove("hide");
    }
    window.classList.add("show", "animated", "fadeIn");
}
function closeModal(window) {
    if (window.classList.contains("show")) {
        window.classList.remove("show");
    }
    window.classList.add("hide", "fadeIn");
}

function modal(btn, selector, closeBtn) {

    let btnPressed = false;

    const trigger = document.querySelectorAll(btn),
        modal = document.querySelector(selector),
        modalClose = document.querySelectorAll(closeBtn),
        modals = document.querySelectorAll("[data-modal]");

    trigger.forEach(item => (
        item.addEventListener("click", (e) => {
            btnPressed = true;
            e.preventDefault();
            if (item.classList.contains("fixed-gift")) {
                closeModal(item);
            }
            modals.forEach(item => {
                openModal(item);
                closeModal(item);
            });

            openModal(modal);
        })
    ));

    modalClose.forEach(item => {
        item.addEventListener('click', () => {
            closeModal(modal);
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target == modal) {
            closeModal(modal);
        }
    });

    setTimeout(() => {
        if (!document.querySelector(".popup-consultation").classList.contains("fadeIn")) {
            openModal(document.querySelector(".popup-consultation"));
        }
    }, 60000);

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.clientHeight, document.body.scrollHeight);
            if (!document.querySelector(selector).classList.contains("fadeIn")) {
                if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                    document.querySelector(selector).click();
                }
            }
        });
    }
    openByScroll(".fixed-gift");
}

export default modal;
export { closeModal };
export { openModal };