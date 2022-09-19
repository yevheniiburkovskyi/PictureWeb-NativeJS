const postData = async (url, data) => {
    document.querySelector(".status").textContent = "Please wait";
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });

    return await res.text();
};

const requestData = async (url) => {
    let res = await fetch(url);

    return await res.text();
};

export { postData, requestData };