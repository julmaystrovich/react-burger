import { apiUrl } from "./const";
import { checkResponse } from "./utils";
import { getCookie } from "./cookie";

export const getBurgerData = () => {
  return fetch(apiUrl + "/ingredients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => checkResponse(res));
};

export const registerRequest = (
  email: string,
  password: string,
  name: string
) => {
  return fetch(apiUrl + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => checkResponse(res));
};

export const loginRequest = (email: string, password: string) => {
  return fetch(apiUrl + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse(res));
};

export const logoutRequest = () => {
  return fetch(apiUrl + "/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  })
    .then((res) => checkResponse(res));
};

export const updateTokenRequest = () => {
  return fetch(apiUrl + "/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  })
    .then((res) => checkResponse(res));
};

export const getUserRequest = () => {
  return fetch(apiUrl + "/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
  })
    .then((res) => checkResponse(res));
};

export const forgotPasswordRequest = (email: string) => {
  return fetch(apiUrl + "/password-reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => checkResponse(res));
};

export const resetPasswordRequest = (password: string, token: string) => {
  return fetch(apiUrl + "/password-reset/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  })
    .then((res) => checkResponse(res));
};

export const updateUserRequest = (email: string, name: string) => {
  return fetch(apiUrl + "/auth/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify({ email, name }),
  })
    .then((res) => checkResponse(res));
};
