import { setCookie, deleteCookie } from "../../utils/cookie";
import { loginRequest, logoutRequest, registerRequest, getUserRequest, updateUserRequest, updateTokenRequest, resetPasswordRequest, forgotPasswordRequest } from "../../utils/connectAPI";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';

export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_FAILED = 'RESET_FAILED';

export const FORGOT_REQUEST = 'FORGOT_REQUEST';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
export const FORGOT_FAILED = 'FORGOT_FAILED';

export function logIn(form) {
    return function(dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });
        loginRequest(form)
        .then((res) => {
            if (res.success) {
                setCookie('token', res.accessToken);
                localStorage.setItem('refreshToken', res.refreshToken);
                dispatch({
                    type: LOGIN_SUCCESS,
                    user: res.user
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: LOGIN_FAILED
            })
        });
    }
}

export function logOut() {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        logoutRequest()
        .then((res) => {
            if (res.success) {
                localStorage.removeItem('refreshToken');
                deleteCookie('token');
                dispatch({
                    type: LOGOUT_SUCCESS
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: LOGOUT_FAILED
            })
        });
    }
}

export function register(form) {
    return function(dispatch) {
        dispatch({
            type: REGISTRATION_REQUEST
        });
        registerRequest(form)
        .then((res) => {
            if (res.success) {
                setCookie('token', res.accessToken);
                localStorage.setItem('refreshToken', res.refreshToken);
                dispatch({
                    type: REGISTRATION_SUCCESS,
                    user: res.user
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: REGISTRATION_FAILED
            })
        });
    }
}

export function updateToken() {
    return function(dispatch) {
        dispatch({
            type: UPDATE_TOKEN_REQUEST
        });
        updateTokenRequest()
        .then((res) => {
            if (res.success) {
                setCookie('token', res.accessToken);
                localStorage.setItem('refreshToken', res.refreshToken);
                dispatch({
                    type: UPDATE_TOKEN_SUCCESS
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: UPDATE_TOKEN_FAILED
            })
        });
    }
}

export function resetPassword(form) {
    return function(dispatch) {
        dispatch({
            type: RESET_REQUEST
        });
        resetPasswordRequest(form)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: RESET_SUCCESS
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: RESET_FAILED
            })
        });
    }
}

export function forgotPassword(form) {
    return function(dispatch) {
        dispatch({
            type: FORGOT_REQUEST
        });
        forgotPasswordRequest(form)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: FORGOT_SUCCESS
                });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FORGOT_FAILED
            })
        });
    }
}

export function getUser() {
    return function(dispatch) {
        dispatch({
            type: GET_USER_REQUEST
        });
        getUserRequest()
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: GET_USER_SUCCESS,
                    user: res.user
                });
            }
        })
        .catch((err) => {
            console.log(err);
            if (localStorage.getItem('refreshToken')) {
                dispatch(updateToken());
                dispatch(getUser());
            } else {
                dispatch({
                    type: GET_USER_FAILED
                })
            }
        });
    }
}

export function updateUser(form) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_USER_REQUEST
        });
        updateUserRequest(form)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: UPDATE_USER_SUCCESS,
                    user: res.user
                });
            }
        })
        .catch((err) => {
            console.log(err);
            if (localStorage.getItem('refreshToken')) {
                dispatch(updateToken());
                dispatch(updateUser(form));
            } else {
                dispatch({
                    type: UPDATE_USER_FAILED
                })
            }
        });
    }
}