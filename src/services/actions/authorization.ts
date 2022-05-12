import { setCookie, deleteCookie } from "../../utils/cookie";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  getUserRequest,
  updateUserRequest,
  updateTokenRequest,
  resetPasswordRequest,
  forgotPasswordRequest,
} from "../../utils/connectAPI";
import { TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

export const REGISTRATION_REQUEST: "REGISTRATION_REQUEST" = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS" = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED: "REGISTRATION_FAILED" = "REGISTRATION_FAILED";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED: "UPDATE_USER_FAILED" = "UPDATE_USER_FAILED";

export const UPDATE_TOKEN_REQUEST: "UPDATE_TOKEN_REQUEST" = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS: "UPDATE_TOKEN_SUCCESS" = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED: "UPDATE_TOKEN_FAILED" = "UPDATE_TOKEN_FAILED";

export const RESET_REQUEST: "RESET_REQUEST" = "RESET_REQUEST";
export const RESET_SUCCESS: "RESET_SUCCESS" = "RESET_SUCCESS";
export const RESET_FAILED: "RESET_FAILED" = "RESET_FAILED";

export const FORGOT_REQUEST: "FORGOT_REQUEST" = "FORGOT_REQUEST";
export const FORGOT_SUCCESS: "FORGOT_SUCCESS" = "FORGOT_SUCCESS";
export const FORGOT_FAILED: "FORGOT_FAILED" = "FORGOT_FAILED";

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly user: TUser;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IRegistrationRequestAction {
  readonly type: typeof REGISTRATION_REQUEST;
}

export interface IRegistrationSuccessAction {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly user: TUser;
}

export interface IRegistrationFailedAction {
  readonly type: typeof REGISTRATION_FAILED;
}

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly user: TUser;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}

export interface IUpdateTokenRequestAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}

export interface IUpdateTokenFailedAction {
  readonly type: typeof UPDATE_TOKEN_FAILED;
}

export interface IResetRequestAction {
  readonly type: typeof RESET_REQUEST;
}

export interface IResetSuccessAction {
  readonly type: typeof RESET_SUCCESS;
}

export interface IResetFailedAction {
  readonly type: typeof RESET_FAILED;
}

export interface IForgotRequestAction {
  readonly type: typeof FORGOT_REQUEST;
}

export interface IForgotSuccessAction {
  readonly type: typeof FORGOT_SUCCESS;
}

export interface IForgotFailedAction {
  readonly type: typeof FORGOT_FAILED;
}

export type TAuthActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IRegistrationRequestAction
  | IRegistrationSuccessAction
  | IRegistrationFailedAction
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | IUpdateTokenRequestAction
  | IUpdateTokenSuccessAction
  | IUpdateTokenFailedAction
  | IResetRequestAction
  | IResetSuccessAction
  | IResetFailedAction
  | IForgotRequestAction
  | IForgotSuccessAction
  | IForgotFailedAction;

const loginRequestAction = (): ILoginRequestAction => ({ type: LOGIN_REQUEST });
const loginSuccessAction = (user: TUser): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  user,
});
const loginFailedAction = (): ILoginFailedAction => ({ type: LOGIN_FAILED });

const logoutRequestAction = (): ILogoutRequestAction => ({ type: LOGOUT_REQUEST });
const logoutSuccessAction = (): ILogoutSuccessAction => ({ type: LOGOUT_SUCCESS });
const logoutFailedAction = (): ILogoutFailedAction => ({ type: LOGOUT_FAILED });

const registrationRequestAction = (): IRegistrationRequestAction => ({ type: REGISTRATION_REQUEST });
const registrationSuccessAction = (
  user: TUser
): IRegistrationSuccessAction => ({ type: REGISTRATION_SUCCESS, user });
const registrationFailedAction = (): IRegistrationFailedAction => ({
  type: REGISTRATION_FAILED,
});

const getUserRequestAction = (): IGetUserRequestAction => ({ type: GET_USER_REQUEST });
const getUserSuccessAction = (user: TUser): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user,
});
const getUserFailedAction = (): IGetUserFailedAction => ({ type: GET_USER_FAILED });

const updateUserRequestAction = (): IUpdateUserRequestAction => ({ type: UPDATE_USER_REQUEST });
const updateUserSuccessAction = (user: TUser): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  user,
});
const updateUserFailedAction = (): IUpdateUserFailedAction => ({ type: UPDATE_USER_FAILED });

const updateTokenRequestAction = (): IUpdateTokenRequestAction => ({ type: UPDATE_TOKEN_REQUEST });
const updateTokenSuccessAction = (): IUpdateTokenSuccessAction => ({ type: UPDATE_TOKEN_SUCCESS });
const updateTokenFailedAction = (): IUpdateTokenFailedAction => ({ type: UPDATE_TOKEN_FAILED });

const resetRequestAction = (): IResetRequestAction => ({ type: RESET_REQUEST });
const resetSuccessAction = (): IResetSuccessAction => ({ type: RESET_SUCCESS });
const resetFailedAction = (): IResetFailedAction => ({ type: RESET_FAILED });

const forgotRequestAction = (): IForgotRequestAction => ({ type: FORGOT_REQUEST });
const forgotSuccessAction = (): IForgotSuccessAction => ({ type: FORGOT_SUCCESS });
const forgotFailedAction = (): IForgotFailedAction => ({ type: FORGOT_FAILED });

export const logIn: AppThunk =
  (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch(loginRequestAction());
    loginRequest(email, password)
      .then((res) => {
        if (res.success) {
            setCookie("token", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(loginSuccessAction(res.user));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailedAction());
      });
  };

export const logOut: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch(logoutRequestAction());
    logoutRequest()
      .then((res) => {
        if (res.success) {
            localStorage.removeItem("refreshToken");
            deleteCookie("token");
            dispatch(logoutSuccessAction());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(logoutFailedAction());
      });
}

export const register: AppThunk = (email: string, password: string, name: string) => (dispatch: AppDispatch) => {
    dispatch(registrationRequestAction());
    registerRequest(email, password, name)
      .then((res) => {
        if (res.success) {
            setCookie("token", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(registrationSuccessAction(res.user));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(registrationFailedAction());
      });
};

export const updateToken: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch(updateTokenRequestAction());
    updateTokenRequest()
      .then((res) => {
        if (res.success) {
            setCookie("token", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(updateTokenSuccessAction());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateTokenFailedAction());
      });
}

export const resetPassword: AppThunk = (password: string, token: string) => (dispatch: AppDispatch) => {
    dispatch(resetRequestAction());
    resetPasswordRequest(password, token)
      .then((res) => {
        if (res.success) {
            dispatch(resetSuccessAction());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(resetFailedAction());
      });
}

export const forgotPassword: AppThunk = (email: string) => (dispatch: AppDispatch) => {
    dispatch(forgotRequestAction());
    forgotPasswordRequest(email)
      .then((res) => {
        if (res.success) {
            dispatch(forgotSuccessAction());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(forgotFailedAction());
      });
}

export const getUser: AppThunk = () => (dispatch) => {
    dispatch(getUserRequestAction());
    getUserRequest()
      .then((res) => {
        if (res.success) {
            dispatch(getUserSuccessAction(res.user));
        }
      })
      .catch((err) => {
        console.log(err);
        if (localStorage.getItem('refreshToken')) {
            dispatch(updateToken());
            dispatch(getUser());
        } else {
            dispatch(getUserFailedAction());
        }
      });
}

export const updateUser: AppThunk = (email: string, name: string) => (dispatch) => {
    dispatch(updateUserRequestAction());
    updateUserRequest(email, name)
      .then((res) => {
        if (res.success) {
            dispatch(updateUserSuccessAction(res.user));
        }
      })
      .catch((err) => {
        console.log(err);
        if (localStorage.getItem("refreshToken")) {
          dispatch(updateToken());
          dispatch(updateUser(email, name));
        } else {
            dispatch(updateUserFailedAction());
        }
      });
}
