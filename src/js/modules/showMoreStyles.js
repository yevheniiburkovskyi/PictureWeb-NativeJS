import { requestData } from "../services/requests";
function showMoreStyles(trigger, animationStyle) {
    const btn = document.querySelector(trigger),
        wrapper = document.querySelector('.styles > div > div'),
        items = document.querySelectorAll(".hidden-lg");

    btn.addEventListener('click', () => {
        items.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', animationStyle);
        });
        btn.remove();
    });

    // btn.addEventListener('click', () => {
    //     requestData('http://localhost:3000/styles').then(res => createCards(JSON.parse(res)));
    //     btn.remove();
    // });

    // function createCards(response) {
    //     response.forEach(item => {
    //         const card = document.createElement('div');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', animationStyle);
    //         card.innerHTML = `
    //         <div class=styles-block>
    //             <img src=${item.src} alt>
    //             <h4>${item.title}</h4>
    //             <a href="${item.link}">Подробнее</a>
    //         </div>
    //         `;
    //         wrapper.appendChild(card);
    //     });

    // }
}

export default showMoreStyles;