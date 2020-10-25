import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    language: 'en'
};

export const languageReducer = createReducer(initialState, {
    [types.LANGUAGE_REQUEST](state, action) {
        return {
            ...state,
            language: action.language,
        };
    }
});