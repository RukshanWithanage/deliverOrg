import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import languageSaga from './LanguageSaga';

export const languageSagas = [takeLatest(types.LANGUAGE_REQUEST, languageSaga)];
