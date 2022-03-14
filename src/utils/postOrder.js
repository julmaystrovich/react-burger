import { apiUrl } from "./const.js";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject("Error: " + res.status);
    }
}

export const postOrder = (data) => {
    return fetch(apiUrl + "/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients: data }),
    })
    .then((res) => checkResponse(res));
}