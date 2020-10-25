import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  AppState,
} from 'react-native';
import Images from '../../../utils/imagePath';
import { connectLang } from '@language';

class LoginView extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        hasLoggedInOnce: false,
        accessToken: '',
        accessTokenExpirationDate: '',
        refreshToken: '',
        clicked: false,
        fetching: false,
        appState: AppState.currentState,
        downloading: false,
        percentage: 0,
        connection_Status: false,
      };
  }

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.containerTop}>
                  <Image
                      style={styles.logoImage}
                      source={Images.logo}
                      resizeMode={'contain'}
                    />
              </View>
              <TouchableOpacity
                  style={styles.containerMiddle2}
                  onPress={
                    console.log('button locked')
                  }
                  accessibilityLabel="logginButtonLoginScreenId"
                  testID="logginButtonLoginScreenId">
                    <Image
                      style={styles.bgImage}
                      source={Images.lock}
                      resizeMode={'contain'}
                    />
              </TouchableOpacity>
              <View style={styles.containerBottom}>
                  <Image
                      style={styles.bgImage}
                      source={Images.mobile_bg}
                      resizeMode={'stretch'}
                    />
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTop: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerMiddle: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMiddle2: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: { 
    backgroundColor: '#fff', 
    flex: 1 
  },
  logoImage: {
    width: '80%',
    height: '20%',
    marginBottom: '15%',
    backgroundColor: '#fff',
  },
  bgImage: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    width: '85%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '85%',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#002F55',
    borderColor: 'orange',
    borderWidth: 1,
  },
  loginText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'SEGOEUI',
    fontSize: 12,
  },
  progressTitile: {
    color: '#4d4e4f',
    fontSize: 18,
    margin: 20,
    marginBottom: 0,
  },
  progressMessage: {
    marginLeft: 20,
    fontSize: 16,
    color: '#2a2b2b'
  }
});
export default connectLang(LoginView);
