import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    isLoggedIn: false,
    id: -1,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {

    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    },
    [types.LOGOUT_REQUEST](state) {
        return {
            ...state
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGOUT_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id
        };
    },
    [types.LOGOUT_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    },
    [types.LOGIN_ENABLE_LOADER](state) {
        return {
            ...state,
            isLoading: true
        };
    },
    [types.LOGIN_DISABLE_LOADER](state) {
        return {
            ...state,
            isLoading: false
        };
    }
});

