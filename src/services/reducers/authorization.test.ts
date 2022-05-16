import { AnyAction } from 'redux';
import { authInitialState } from './authorization';
import authorizationReducer from './authorization';
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
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_SUCCESS,
    UPDATE_TOKEN_FAILED,
    FORGOT_REQUEST,
    FORGOT_SUCCESS,
    FORGOT_FAILED,
    RESET_REQUEST,
    RESET_SUCCESS,
    RESET_FAILED
} from '../actions/authorization';

describe('Проверка Authorization Reducer', () => {
    const user = { name: "testUser", email: "test@test.test" };
    const userUpdate = { name: "TestUpdate", email: "test@test.test" };
    
    it('Проверка Initial State', () => {
        expect(authorizationReducer(undefined, {} as AnyAction)).toEqual(authInitialState);
    });

    it('Проверка LOGIN_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: LOGIN_REQUEST,
        })).toEqual({
            ...authInitialState,
            loginRequest: true,
            loginFailed: false,
        });
    });
    it('Проверка LOGIN_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState,
            user: { name: "", email: "" }
        }, {
            type: LOGIN_SUCCESS,
            user
        })).toEqual({
            ...authInitialState,
            user,
            loginRequest: false,
            loggedIn: true
        });
    });
    it('Проверка LOGIN_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: LOGIN_FAILED,
        })).toEqual({
            ...authInitialState,
            loginFailed: true,
            loginRequest: false,
        });
    });

    it('Проверка LOGOUT_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: LOGOUT_REQUEST,
        })).toEqual({
            ...authInitialState,
            logoutRequest: true,
            logoutFailed: false,
        });
    });
    it('Проверка LOGOUT_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState,
            user
        }, {
            type: LOGOUT_SUCCESS
        })).toEqual({
            ...authInitialState,
            logoutRequest: false,
            loggedIn: false,
            user: { name: "", email: "" }
        });
    });
    it('Проверка LOGOUT_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: LOGOUT_FAILED,
        })).toEqual({
            ...authInitialState,
            logoutRequest: false, 
            logoutFailed: true
        });
    });

    it('Проверка REGISTRATION_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: REGISTRATION_REQUEST,
        })).toEqual({
            ...authInitialState,
            registerRequest: true,
            registerFailed: false,
        });
    });
    it('Проверка REGISTRATION_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState,
            user: { name: "", email: "" }
        }, {
            type: REGISTRATION_SUCCESS,
            user
        })).toEqual({
            ...authInitialState,
            user,
            registerRequest: false,
            loggedIn: true
        });
    });
    it('Проверка REGISTRATION_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: REGISTRATION_FAILED,
        })).toEqual({
            ...authInitialState,
            registerFailed: true,
            registerRequest: false,
        });
    });

    it('Проверка GET_USER_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: GET_USER_REQUEST,
        })).toEqual({
            ...authInitialState,
            getUserRequest: true,
            getUserFailed: false
        });
    });
    it('Проверка GET_USER_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState,
            user: { name: "", email: "" }
        }, {
            type: GET_USER_SUCCESS,
            user
        })).toEqual({
            ...authInitialState,
            user,
            getUserRequest: false, 
            loggedIn: true
        });
    });
    it('Проверка GET_USER_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: GET_USER_FAILED,
        })).toEqual({
            ...authInitialState,
            getUserRequest: false,
            getUserFailed: true
        });
    });

    it('Проверка UPDATE_USER_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: UPDATE_USER_REQUEST,
        })).toEqual({
            ...authInitialState,
            updateUserRequest: true,
            updateUserFailed: false
        });
    });
    it('Проверка UPDATE_USER_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState,
            user
        }, {
            type: UPDATE_USER_SUCCESS,
            user: userUpdate
        })).toEqual({
            ...authInitialState,
            user: userUpdate,
            updateUserRequest: false
        });
    });
    it('Проверка UPDATE_USER_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: UPDATE_USER_FAILED,
        })).toEqual({
            ...authInitialState,
            updateUserRequest: false, 
            updateUserFailed: true
        });
    });

    it('Проверка UPDATE_TOKEN_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: UPDATE_TOKEN_REQUEST,
        })).toEqual({
            ...authInitialState,
            updateTokenRequest: true,
            updateTokenFailed: false
        });
    });
    it('Проверка UPDATE_TOKEN_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState
        }, {
            type: UPDATE_TOKEN_SUCCESS
        })).toEqual({
            ...authInitialState,
            loggedIn: true, 
            updateTokenRequest: false
        });
    });
    it('Проверка UPDATE_TOKEN_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: UPDATE_TOKEN_FAILED,
        })).toEqual({
            ...authInitialState,
            updateTokenFailed: true,
            updateTokenRequest: false,
        });
    });

    it('Проверка FORGOT_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: FORGOT_REQUEST,
        })).toEqual({
            ...authInitialState,
            forgotPasswordRequest: true, 
            forgotPasswordFailed: false
        });
    });
    it('Проверка FORGOT_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState
        }, {
            type: FORGOT_SUCCESS
        })).toEqual({
            ...authInitialState,
            forgotPasswordRequest: false, 
            forgotPasswordFailed: false
        });
    });
    it('Проверка FORGOT_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: FORGOT_FAILED,
        })).toEqual({
            ...authInitialState,
            forgotPasswordRequest: false, 
            forgotPasswordFailed: true
        });
    });

    it('Проверка RESET_REQUEST', () => {
        expect(authorizationReducer(authInitialState, {
            type: RESET_REQUEST,
        })).toEqual({
            ...authInitialState,
            resetPasswordRequest: true, 
            resetPasswordFailed: false
        });
    });
    it('Проверка RESET_SUCCESS', () => {
        expect(authorizationReducer({
            ...authInitialState
        }, {
            type: RESET_SUCCESS
        })).toEqual({
            ...authInitialState,
            resetPasswordRequest: false, 
            resetPasswordSuccess: true
        });
    });
    it('Проверка RESET_FAILED', () => {
        expect(authorizationReducer(authInitialState, {
            type: RESET_FAILED,
        })).toEqual({
            ...authInitialState,
            resetPasswordFailed: true,
            resetPasswordRequest: false,
        });
    });
})