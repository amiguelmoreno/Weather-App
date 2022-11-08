const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            );
        }, s * 1000);
    });
};

export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(url), timeout(10)]);
        const data = await res.json();

        if (!res.ok) {
            displayError("Data is not available, page fallen 💥");
            throw new Error("Data is not available, page fallen 💥");
        }

        if (data.length === 0) {
            displayError("City not found 🌍");
            throw new Error("City not found 🌍");
        }

        return data;
    } catch (err) {
        throw err;
    }
};

function displayError(err) {
    document.querySelector(".error__message").innerHTML = `${err}`;

    document
        .querySelector(".error__message")
        .classList.add("error__message-active");

    setTimeout(
        () =>
            document
                .querySelector(".error__message")
                .classList.remove("error__message-active"),
        2000
    );
}
