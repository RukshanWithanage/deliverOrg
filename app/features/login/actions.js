import * as types from './actionTypes';

export function requestLogin(username, password) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
    };
}

export function requestLogout() {
    return {
        type: types.LOGOUT_REQUEST
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function logoutFailed() {
    return {
        type: types.LOGOUT_FAILED
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function onLogoutResponse(response) {
    return {
        type: types.LOGOUT_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}
