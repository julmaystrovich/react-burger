import { apiUrl } from "./const";
import { checkResponse } from "./utils";
import { TIngredientId } from "./types";
import { getCookie } from "./cookie";

export const postOrder = (data: Array<TIngredientId>) => {
    return fetch(apiUrl + "/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${getCookie('token')}`,
        },
        body: JSON.stringify({ ingredients: data }),
    })
    .then((res) => checkResponse(res))
}