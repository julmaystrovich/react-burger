const apiUrl = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject("Error: " + res.status);
    }
}

export const getBurgerData = () => {
    return fetch(apiUrl + "/ingredients")
    .then((res) => checkResponse(res));
}