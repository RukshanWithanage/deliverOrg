
import { put, call,delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as logoutActions from '../actions';
import * as loader from '@customLoaderActions';
import { navigateToLogin } from '../../../navigation/NavigationHelpers';

export default function* logoutAsync() {
    yield put(loader.enableLoader());
    yield delay(1000);
    const response = { success: true, data: { id: -1 } };
    if (response.success) {
        yield put(logoutActions.onLogoutResponse(response.data));
        yield put(loader.disableLoader({}));
        yield call(navigateToLogin);
    } else {
        yield put(logoutActions.logoutFailed());
        yield put(loader.disableLoader({}));
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.Message);
        }, 200);
    }
}
