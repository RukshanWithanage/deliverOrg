import React, { Component } from 'react';
import {
  Text,
  Animated,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackAndroid,
  BackHandler,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Images from '../../../../utils/imagePath';
import styles from './style';

const HwBackHandler = BackHandler || BackAndroid;
const HW_BACK_EVENT = 'hardwareBackPress';

export default class Alert extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);

    this.state = {
      showSelf: false,
      showleftButton: false,
      showrightButton: false,
      leftText: "",
      rightText: "",
      leftButtonColor: '#002F55',
      rightButtonColor: '#002F55',
      onleftPressed: "",
      onrightPressed: "",
      title: "",
      message: "",
      onClosePressed: () => { }
    };

    this.baseState = this.state
  }

  showAlertTwoButtonAlertWithoutMessage(title = "", leftButton = 'left', rightButton = 'right', onTappedClose = () => { }, onleftPressed = () => { this._onTapOutside() }, onrightPressed = () => { this._onTapOutside() }, message = "") {
    this.setState({
      showSelf: true,
      showleftButton: true,
      showrightButton: true,
      leftText: leftButton,
      rightText: rightButton,
      leftButtonColor: '#002F55',
      rightButtonColor: '#002F55',
      onleftPressed: onleftPressed,
      onrightPressed: onrightPressed,
      onClosePressed: onTappedClose,
      title: title,
      message:message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }

  showAlertSingleButtonMessage(title = "Svenska Skrot", message = "", rightButton = 'OK', onrightPressed = () => { this.dismissShowAlert() }) {
    this.setState({
      showSelf: true,
      showleftButton: false,
      showrightButton: true,
      rightText: rightButton,
      rightButtonColor: '#002F55',
      onrightPressed: onrightPressed,
      title: title,
      message: message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }

  showAlertSingleButtonMessageForCloseActioned(title = "Svenska Skrot", message = "", rightButton = 'OK', onrightPressed = () => { this.dismissShowAlert() }, onTappedClose = () => { }) {
    this.setState({
      showSelf: true,
      showleftButton: false,
      showrightButton: true,
      rightText: rightButton,
      rightButtonColor: '#002F55',
      onrightPressed: onrightPressed,
      onClosePressed: onTappedClose,
      title: title,
      message: message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }

  showAlertSingleButtonMessageForCloseActionedAndOkActioned(title = "Svenska Skrot", message = "", rightButton = 'OK', onrightPressed = () => { }, onTappedClose = () => { }) {
    this.setState({
      showSelf: true,
      showleftButton: false,
      showrightButton: true,
      rightText: rightButton,
      rightButtonColor: '#002F55',
      onrightPressed: onrightPressed,
      onClosePressed: onTappedClose,
      title: title,
      message: message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }

  showAlertSingleUpdateErrorButtonMessage(title = "Svenska Skrot", message = "", rightButton = 'right', onrightPressed = () => { this.dismissShowAlert() }) {
    this.setState({
      showSelf: true,
      showleftButton: false,
      showrightButton: true,
      rightText: rightButton,
      rightButtonColor: '#002F55',
      onrightPressed: onrightPressed,
      title: title,
      message: message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }

  showAlertSingleUpdateButtonMessage(title = "", message = "", rightButton = 'right', onTappedClose = () => { }, onrightPressed = () => { this.dismissShowAlert() }) {
    this.setState({
      showSelf: true,
      showleftButton: false,
      showrightButton: true,
      rightText: rightButton,
      rightButtonColor: '#002F55',
      onrightPressed: onrightPressed,
      onClosePressed: onTappedClose,
      title: title,
      message: message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }
  
  showAlertSingleButtonMessageCloseButtonFunction(title = "Svenska Skrot", message = "", rightButton = 'OK', onrightPressed = () => { this.dismissShowAlert() }, onTappedClose = () => { }) {
    this.setState({
      showSelf: true,
      showleftButton: false,
      showrightButton: true,
      rightText: rightButton,
      rightButtonColor: '#002F55',
      onrightPressed: onrightPressed,
      onClosePressed: onTappedClose,
      title: title,
      message: message
    });
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  }

  dismissShowAlert() {
    this._springHide()
  }

  componentDidMount() {
    HwBackHandler.addEventListener(HW_BACK_EVENT, this._handleHwBackEvent);
  }

  _springShow = fromConstructor => {
    this._toggleAlert(fromConstructor);
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 10
    }).start();
  };

  _springHide = () => {
    if (this.state.showSelf === true) {
      Animated.spring(this.springValue, {
        toValue: 0,
        tension: 10
      }).start();

      setTimeout(() => {
        this._toggleAlert();
        this._onDismiss();
      }, 70);
    }
  };

  _toggleAlert = fromConstructor => {
    if (fromConstructor) this.state = { showSelf: true };
    else this.setState({ showSelf: !this.state.showSelf });
  };

  _handleHwBackEvent = () => {
    const { closeOnHardwareBackPress } = this.props;
    if (this.state.showSelf && closeOnHardwareBackPress) {
      this._springHide();
      return true;
    } else if (!closeOnHardwareBackPress && this.state.showSelf) {
      return true;
    }

    return false;
  };

  _onTapOutside = () => {
    const { closeOnTouchOutside } = this.props;
    this.state.onClosePressed()
    if (closeOnTouchOutside) this._springHide();
  };

  _onDismiss = () => {
    this.resetForm()
    const { onDismiss } = this.props;
    onDismiss && onDismiss();
  };

  _renderButton = data => {
    const {
      text,
      backgroundColor,
      buttonStyle,
      buttonTextStyle,
      onPress
    } = data;

    const {
      showleftButton
    } = this.state;

    return (
      <TouchableOpacity style={[styles.button, { backgroundColor, flex: showleftButton ? 1 : 0.25 }, buttonStyle,]} onPress={onPress}>
        <View>
          <Text style={[styles.buttonText, buttonTextStyle]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  _renderStatesAlert = () => {
    const animation = { transform: [{ scale: this.springValue }] };

    const { title, message, customView = null } = this.state;

    const {
      showleftButton,
      leftText,
      leftButtonColor,
      leftButtonStyle,
      leftButtonTextStyle,
      onleftPressed
    } = this.state;
    const {
      showrightButton,
      rightText,
      rightButtonColor,
      rightButtonStyle,
      rightButtonTextStyle,
      onrightPressed
    } = this.state;

    const leftButtonData = {
      text: leftText,
      backgroundColor: leftButtonColor,
      buttonStyle: leftButtonStyle,
      buttonTextStyle: leftButtonTextStyle,
      onPress: onleftPressed
    };

    const rightButtonData = {
      text: rightText,
      backgroundColor: rightButtonColor,
      buttonStyle: rightButtonStyle,
      buttonTextStyle: rightButtonTextStyle,
      onPress: onrightPressed
    };

    return (
      <View style={[styles.container]}>
        <TouchableWithoutFeedback onPress={this._onTapOutside}>
          <View style={[styles.overlay]} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[styles.contentContainer, animation]}
        >
          <View style={styles.alertHeader}>
            <View style={styles.titleleftContainer}>
              {title ? (
                <Text style={[styles.title]}>{title}</Text>
              ) : <Text style={[styles.title]}>{" "}</Text>}
            </View>
            <View style={styles.titlerightContainer}>
              <TouchableOpacity style={styles.titleTouch} onPress={this._onTapOutside}>
                <Image style={styles.closeImage} resizeMode={'contain'} source={Images.close_icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.content, { paddingTop: message ? 30 : 0 }]}>
            {message ? (
              <Text style={[styles.message]}>{message}</Text>
            ) : null}
            {customView}
          </View>
          <View style={[styles.action, styles.actionAll]}>
            {showleftButton ? this._renderButton(leftButtonData) : null}
            {showrightButton ? this._renderButton(rightButtonData) : null}
          </View>
        </Animated.View>
      </View>
    );
  };

  render() {
    const { showSelf } = this.state;
    if (showSelf) {
      return this._renderStatesAlert();
    } else {
      return null;
    }
  }

  resetForm = () => {
    this.setState(this.baseState)
  }

  componentWillUnmount() {
    HwBackHandler.removeEventListener(HW_BACK_EVENT, this._handleHwBackEvent);
  }
}

Alert.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
  closeOnHardwareBackPress: PropTypes.bool,
};

Alert.defaultProps = {
  closeOnTouchOutside: true,
  closeOnHardwareBackPress: true,
};
