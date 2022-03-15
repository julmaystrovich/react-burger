import { apiUrl } from "./const.js";
import { checkResponse } from "./utils.js";

export const getBurgerData = () => {
    return fetch(apiUrl + "/ingredients")
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}