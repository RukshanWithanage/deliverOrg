import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionTypes';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';

export const loginSagas = [takeLatest(types.LOGIN_REQUEST, loginSaga)];
export const logoutSagas = [takeLatest(types.LOGOUT_REQUEST, logoutSaga)];
