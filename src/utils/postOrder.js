import { apiUrl } from "./const.js";
import { checkResponse } from "./utils.js";

export const postOrder = (data) => {
    return fetch(apiUrl + "/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients: data }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}