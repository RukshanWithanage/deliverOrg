import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import { getLoginState } from '../selectors';
import { connectLang } from "@language";

class LoginContainer extends Component {
    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        status: getLoginState(state),
        strings:this.props,
        isConnected: state.NetworkStateReducer.isConnected,
    };
}
function mapDispatchToProps(dispatch) {
    return {
    };
}

const ConnectedElement = connect(
    mapStateToProps,
    mapDispatchToProps
)
(connectLang(LoginContainer))
export default ConnectedElement;