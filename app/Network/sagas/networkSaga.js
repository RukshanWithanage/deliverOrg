import NetInfo, { NetInfoSubscription } from "@react-native-community/netinfo";
import { eventChannel } from 'redux-saga';
import { put, fork, take, call } from 'redux-saga/effects';
import * as NetworkState from '../action';
import { showNetworkAlert } from "../Alert";

function* initializeNetworkListner() {
  let subscription = NetInfoSubscription;
  const chan = eventChannel(emitter => {
    subscription = NetInfo.addEventListener(NetInfoState =>
      emitter(NetInfoState.isConnected),
    );
    return () => {
      subscription;
    };
  });
      while (true) {
        const isConnected = yield take(chan);
        yield call(showNetworkAlert, isConnected)
        yield put(NetworkState.changeNetwork(isConnected));
      }
}

function* addListner() {
  yield fork(initializeNetworkListner);
}

function* networkSaga() {
  yield fork(addListner);
}

export default networkSaga;