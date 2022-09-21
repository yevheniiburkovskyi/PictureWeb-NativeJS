const drop = () => {
    //drag *
    //dragend * срабатывают прямо на перетаскиваемом элементе
    //dragenter - объект на dropArea
    //dragexit *
    //dragleave - объект за пределами dropArea
    //dragover - объект зависает над dropArea
    //dragstart *
    //drop - объект отправлен в dropArea

    const inputArea = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        inputArea.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(event => {
        inputArea.forEach(item => {
            item.addEventListener(event, () => {
                item.closest('.file_upload').style.border = "5px dotted black";
            }, false);
        });
    });

    ['dragleave', 'drop'].forEach(event => {
        inputArea.forEach(item => {
            item.addEventListener(event, () => {
                item.closest('.file_upload').style.border = "none";
            }, false);
        });
    });

    inputArea.forEach(item => {
        item.addEventListener('drop', (event) => {
            item.files = event.dataTransfer.files;
            let fileNameArr = item.files[0].name.split('.');
            let dots;
            fileNameArr[0].length > 6 ? dots = '...' : dots = '.';
            const fileName = fileNameArr[0].slice(0, 6) + dots + fileNameArr[fileNameArr.length - 1];
            item.previousElementSibling.innerHTML = `${fileName}`;
        });
    });
};

export default drop;