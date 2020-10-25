
import { put, call, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loader from '@customLoaderActions';
import * as loginActions from '../actions';
import { navigateToHome } from '../../../navigation/NavigationHelpers';

export default function* loginAsync(action) {
    yield put(loader.enableLoader());
    yield delay(3000);
    const response = { success: true, data: { id: 1 } };

    if (response.success) {
        yield put(loginActions.onLoginResponse(response.data));
        yield put(loader.disableLoader({}));
        yield call(navigateToHome);
    } else {
        yield put(loginActions.loginFailed());
        yield put(loader.disableLoader({}));
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.Message);
        }, 200);
    }
}
