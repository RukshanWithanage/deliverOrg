import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    isLoading: false
};

export const loaderReducer = createReducer(initialState, {
    [types.ENABLE_LOADER](state) {
        return {
            ...state,
            isLoading: true
        };
    },
    [types.DISABLE_LOADER](state) {
        return {
            ...state,
            isLoading: false
        };
    }
})