import * as actions from './actionTypes'

const initialState = {
    isConnected: null,
};

export default function NetworkStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.NETWORK_CHANGED:
            return {
                ...state,
                isConnected: action.isConnected
            };
        default:
            return state;
    }
}