import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Modal, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

const transparent = 'transparent';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: transparent,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textContent: {
    top: 80,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  activityIndicator: {
    flex: 1
  }
});

const ANIMATION = ['none', 'slide', 'fade'];
const SIZES = ['small', 'normal', 'large'];

class Spinner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      textContent: this.props.textContent
    };
    this.showLoader = this.showLoader.bind(this);
	this.close = this.close.bind(this);
  }

  static propTypes = {
    cancelable: PropTypes.bool,
    color: PropTypes.string,
    animation: PropTypes.oneOf(ANIMATION),
    overlayColor: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    textContent: PropTypes.string,
    textStyle: PropTypes.object,
    visible: PropTypes.bool,
    indicatorStyle: PropTypes.object,
    customIndicator: PropTypes.element,
    children: PropTypes.element
  };

  static defaultProps = {
    visible: false,
    cancelable: false,
    textContent: '',
    animation: 'none',
    color: 'white',
    size: 'large', // 'normal',
    overlayColor: 'rgba(0, 0, 0, 0.25)'
  };

  showLoader() {
    this.setState({ visible: true });
  }

  close() {
    this.setState({ visible: false });
  }

  _handleOnRequestClose() {
    if (this.props.cancelable) {
      this.close();
    }
  }

  _renderDefaultContent() {
    return (
      <View style={styles.background}>
        {this.props.customIndicator ? (
          this.props.customIndicator
        ) : (
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={[styles.activityIndicator, { ...this.props.indicatorStyle }]}
          />
        )}
        <View style={[styles.textContainer, { ...this.props.indicatorStyle }]}>
          <Text style={[styles.textContent, this.props.textStyle]}>
            {this.state.textContent}
          </Text>
        </View>
      </View>
    );
  }

  _renderSpinner() {
    if (!this.props.isLoading) return null;

    const spinner = (
      <View
        style={[styles.container, { backgroundColor: this.props.overlayColor }]}
        key={`spinner_${Date.now()}`}
      >
        {this.props.children
          ? this.props.children
          : this._renderDefaultContent()}
      </View>
    );

    return (
      <Modal
        animationType={this.props.animation}
        onRequestClose={() => this._handleOnRequestClose()}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={this.props.isLoading}
      >
        {spinner}
      </Modal>
    );
  }

  render() {
    return this._renderSpinner();
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loaderReducer.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner);