
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

    const postData = async (url, data) => {
        document.querySelector('.statusImg').setAttribute('src', message.loading);
        document.querySelector(".status").textContent = "Please wait";
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            item.previousElementSibling.innerHTML = `${item.files[0].name}`;
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