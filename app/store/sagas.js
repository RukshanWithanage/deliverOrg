
import { all, fork } from 'redux-saga/effects';
import { loginSagas, logoutSagas } from '../../app/features/login/sagas';
import { languageSagas } from '../config/languageProvider/redux/sagas'
import networkSagas from '../Network/sagas'

export default function* rootSaga() {
    yield all([
        ...loginSagas,
        ...logoutSagas,
        ...languageSagas
    ]);
    yield fork(networkSagas);
}
