import { apiUrl } from "./const.js";

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