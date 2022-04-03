import { apiUrl } from "./const.js";
import { checkResponse } from "./utils.js";
import { getCookie } from "./cookie.js";

export const getBurgerData = () => {
    return fetch(apiUrl + "/ingredients", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export const registerRequest = (email, password, name) => {
    return fetch(apiUrl + "/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, name }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export const loginRequest = (email, password) => {
    return fetch(apiUrl + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export const logoutRequest = () => {
    return fetch(apiUrl + "/auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export const updateTokenRequest = () => {
    return fetch(apiUrl + "/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: getCookie('token'),
        },
        body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

  export const getUserRequest = () => {
    return fetch(apiUrl + "/auth/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: getCookie('token'),
        },
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

  export const forgotPasswordRequest = (email) => {
    return fetch(apiUrl + "/password-reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export const resetPasswordRequest = ( password, token ) => {
    return fetch(apiUrl + "/password-reset/reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password, token }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export const updateUserRequest = (email, name) => {
    return fetch(apiUrl + "/auth/user", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: getCookie('token'),
        },
        body: JSON.stringify({ email, name }),
    })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}