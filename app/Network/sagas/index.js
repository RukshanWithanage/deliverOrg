import network from './networkSaga';
import { fork } from 'redux-saga/effects';

function* networkSagas() {
    yield fork(network);
}
export default networkSagas;