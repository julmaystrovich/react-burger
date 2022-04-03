import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_SUCCESS,
    UPDATE_TOKEN_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    FORGOT_REQUEST,
    FORGOT_SUCCESS,
    FORGOT_FAILED,
    RESET_REQUEST,
    RESET_SUCCESS,
    RESET_FAILED} from "../actions/authorization";

    const authInitialState = {
        user: null,
        loggedIn: false,
        loginRequest: false,
        loginFailed: false,
        logoutRequest: false,
        logoutFailed: false,
        registerRequest: false,
        registerFailed: false,
        updateTokenRequest: false,
        updateTokenFailed: false,
        getUserRequest: false,
        getUserFailed: false,
        updateUserRequest: false,
        updateUserFailed: false,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
        resetPasswordSuccess: false,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
    };

    const authorizationReducer = (state = authInitialState, action) => {
        switch (action.type) {
            case LOGIN_REQUEST: {
                return { ...state, loginRequest: true, loginFailed: false };
            }
            case LOGIN_SUCCESS: {
                return { ...state, user: action.user, loginRequest: false, loggedIn: true };
            }
            case LOGIN_FAILED: {
                return { ...state, loginRequest: false, loginFailed: true };
            }
            case LOGOUT_REQUEST: {
                return { ...state, logoutRequest: true, logoutFailed: false };
            }
            case LOGOUT_SUCCESS: {
                return { ...state, user: null, loggedIn: false };
            }
            case LOGOUT_FAILED: {
                return { ...state, logoutRequest: false, logoutFailed: true };
            }
            case REGISTRATION_REQUEST: {
                return { ...state, registerRequest: true, registerFailed: false };
            }
            case REGISTRATION_SUCCESS: {
                return { ...state, user: action.user, registerRequest: false, loggedIn: true };
            }
            case REGISTRATION_FAILED: {
                return { ...state, registerRequest: false, registerFailed: true };
            }
            case UPDATE_TOKEN_REQUEST: {
                return { ...state, updateTokenRequest: true, updateTokenFailed: false };
            }
            case UPDATE_TOKEN_SUCCESS: {
                return { ...state, loggedIn: true, updateTokenRequest: false };
            }
            case UPDATE_TOKEN_FAILED: {
                return { ...state, updateTokenFailed: true, updateTokenRequest: false };
            }
            case GET_USER_REQUEST: {
                return { ...state, getUserRequest: true, getUserFailed: false };
            }
            case GET_USER_SUCCESS: {
                return { ...state, user: action.user, getUserRequest: false, loggedIn: true };
            }
            case GET_USER_FAILED: {
                return { ...state, getUserRequest: false, getUserFailed: true };
            }
            case UPDATE_USER_REQUEST: {
                return { ...state, updateUserRequest: true, updateUserFailed: false };
            }
            case UPDATE_USER_SUCCESS: {
                return { ...state, user: action.user, updateUserRequest: false };
            }
            case UPDATE_USER_FAILED: {
                return { ...state, updateUserRequest: false, updateUserFailed: true };
            }
            case RESET_REQUEST: {
                return { ...state, resetPasswordRequest: true, resetPasswordFailed: false, resetPasswordSuccess: true };
            }
            case RESET_SUCCESS: {
                return { ...state, user: action.user, resetPasswordRequest: false, resetPasswordSuccess: true };
            }
            case RESET_FAILED: {
                return { ...state, resetPasswordRequest: false, resetPasswordFailed: true, resetPasswordSuccess: true };
            }
            case FORGOT_REQUEST: {
                return { ...state, forgotPasswordRequest: true, forgotPasswordFailed: false };
            }
            case FORGOT_SUCCESS: {
                return { ...state, user: action.user, forgotPasswordRequest: false };
            }
            case FORGOT_FAILED: {
                return { ...state, forgotPasswordRequest: false, forgotPasswordFailed: true };
            }
            default: {
                return state;
            }
        }
    }

    export default authorizationReducer;