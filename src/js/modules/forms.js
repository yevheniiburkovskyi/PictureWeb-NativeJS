import { postData } from '../services/requests';
function forms() {

    const form = document.querySelectorAll("form"),
        input = document.querySelectorAll("input"),
        textarea = document.querySelectorAll("[name=message]"),
        upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Please wait',
        done: 'Your message has been send',
        err: 'Something went wrong...',
        doneImg: 'assets/img/ok.png',
        errImg: 'assets/img/fail.png',
        loadingImg: 'assets/img/spinner.gif',
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let fileNameArr = item.files[0].name.split('.');
            let dots;
            fileNameArr[0].length > 6 ? dots = '...' : dots = '.';
            const fileName = fileNameArr[0].slice(0, 6) + dots + fileNameArr[fileNameArr.length - 1];
            item.previousElementSibling.innerHTML = `${fileName}`;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const element = document.createElement('div'),
                statusImg = document.createElement('img');
            element.classList.add('status');
            statusImg.classList.add('statusImg');
            item.append(statusImg);
            item.append(element);

            const formData = new FormData(item);

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(result => {
                    console.log(result);
                    statusImg.setAttribute('src', message.doneImg);
                    element.innerHTML = message.done;
                })
                .catch(err => {
                    statusImg.setAttribute('src', message.errImg);
                    element.innerHTML = message.err;
                })
                .finally(() => {
                    setTimeout(() => { statusImg.remove(); element.remove(); }, 5000);
                    input.forEach(item => {
                        item.value = ``;
                    });
                    textarea.forEach(item => {
                        item.value = ``;
                    });
                    upload.forEach(item => {
                        item.previousElementSibling.innerHTML = `File not selected`;
                    });
                });
        });
    });
}

export default forms;