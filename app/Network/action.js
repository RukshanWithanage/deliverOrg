import * as actions from './actionTypes'

export function requestNetworkReach() {
    return {
        type: actions.NETWORK_REACH_REQUEST,
    };
}

export function changeNetwork(isConnected) {
    return {
        type: actions.NETWORK_CHANGED,
        isConnected,
    };
}