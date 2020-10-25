
import * as types from './actionTypes';

export function onLanguageChange(language) {
    return {
        type: types.LANGUAGE_REQUEST,
        language
    };
}