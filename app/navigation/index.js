import React, { Component } from 'react';
import { AppState, StyleSheet } from 'react-native';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';
import configureStore from '../store';
const { store } = configureStore();
import { initLanguages, LanguageProvider } from '@language';
import { languages } from '@config';
import * as api from '../api/Api';
import RNFetchBlob from 'react-native-fetch-blob';
import DeviceInfo from 'react-native-device-info';
import { CustomAlertHolder } from '../components/CustomAlertView/customAlertHolder';
import RNExitApp from 'react-native-exit-app';
import RNApkInstallerN from 'react-native-apk-installer-n';
import RNFS from 'react-native-fs';
import { ProgressDialog } from 'react-native-simple-dialogs';
import * as languageAction from '../config/languageProvider/redux/LanguageAction';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      downloading: false,
      percentage: 0,
      language: languages,
      strings: initLanguages(languages),
      downloaded: false,
    };
  }
  
  async componentWillMount() {
    this.downloadEnLanguage();
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      if (!this.state.downloading) {
        this.versionCheck();
      }
    }
    this.setState({ appState: nextAppState });
  };

  downloadEnLanguage() {
    RNFetchBlob.fetch('GET', api.LANGUAGE_EN_LINK)
      .then(res => {
        const EnLanguage = res.json();
        this.downloadSwLanguage(EnLanguage);
      })
      .catch((errorMessage, statusCode) => {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage(
          'Something failed',
          'The internet connection seems to be down. Please check that!',
        );
      });
  }
  downloadSwLanguage(EnLanguage) {
    RNFetchBlob.fetch('GET', api.LANGUAGE_SW_LINK)
      .then(res => {
        const defaultLanguage = this.state.strings.getLanguage();
        const SwLanguage = res.json();
        this.state.strings.setContent({ en: EnLanguage, sw: SwLanguage });
        this.state.strings.setLanguage(defaultLanguage);
        languageAction.onLanguageChange(defaultLanguage);
        this.setState({ language: languages, downloaded: true });
        this.versionCheck();
      })
      .catch((errorMessage, statusCode) => {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage(
          'Something failed',
          'The internet connection seems to be down. Please check that!',
        );
      });
  }

  async versionCheck() {
    RNFetchBlob.fetch('GET', api.VERSION_CHECK)
      .then(res => {
        let json = res.json();
        if (json.ReleasedVersion != null) {
          if (json.ReleasedVersion.trim() == DeviceInfo.getVersion().trim()) {
            // this.continueLogin(); use this methos if you want to continue login
          } else {
            CustomAlertHolder.getAlert().showAlertSingleUpdateButtonMessage(
              this.state.strings.NewVersionAvailable,
              this.state.strings.NewVersion + json.ReleasedVersion,
              json.IsUpdateRequired ? this.state.strings.UPDATE : 'OK',
              () => {
                this.onTappedClose();
              },
              () => {
                json.IsUpdateRequired ? this.apkDownload() : null;
              },
            );
          }
        }
      })
      .catch((errorMessage, statusCode) => {
        CustomAlertHolder.getAlert().showAlertSingleUpdateButtonMessage(
          'Something failed',
          'The internet connection seems to be down. Please check that!',
          'OK',
          () => {
            this.onTappedClose();
          },
          () => {
            this.onTappedClose();
          },
        );
      });
  }

  downloadFailedMessage() {
    CustomAlertHolder.getAlert().showAlertSingleUpdateButtonMessage(
      'Sorry, Something went wrong',
      "We're working on it and we'll get fixed as soon as we can.",
      'OK',
      () => {
        this.onTappedClose();
      },
      () => {
        this.onTappedClose();
      },
    );
  }

  onTappedClose() {
    RNExitApp.exitApp();
  }

  apkDownload() {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds

    let apkName = year + month + date + hours + min + sec + '.apk';

    const filePath = RNFS.ExternalStorageDirectoryPath + '/' + apkName;
    let incr = 0;
    let percentage = 0;
    try {
      const download = RNFS.downloadFile({
        fromUrl: api.APK_LINK,
        toFile: filePath,
        progress: res => {
          incr += 1;
          if (incr == 1) {
            CustomAlertHolder.getAlert().dismissShowAlert();
            this.setState({ downloading: true });
            percentage = (res.bytesWritten / res.contentLength) * 100;
          }
          this.setState({
            percentage: (res.bytesWritten / res.contentLength) * 100,
          });
          if ((res.bytesWritten / res.contentLength).toFixed(2) == 1) {
            this.setState({ downloading: false });
          }
        },
        progressDivider: 1,
      });
      download.promise
        .then(result => {
          if (result.statusCode == 200) {
            RNApkInstallerN.install(filePath);
          } else {
            this.setState({ downloading: false });
            this.downloadFailedMessage();
          }
        })
        .catch(err => {
          this.setState({ downloading: false });
          this.downloadFailedMessage();
        });
    } catch (error) {
      this.downloadFailedMessage();
    }
  }

  render() {
    if (this.state.downloaded) {
      return (
        <LanguageProvider
          strings={this.state.strings}
          language={store.getState().languageReducer.language}>
          <NavigationStack
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <ProgressDialog
            visible={this.state.downloading}
            title={'Update downloading '}
            titleStyle={styles.progressDialogTitleStyle}
            message={
              this.state.percentage == 0
                ? 'Please, wait...'
                : this.state.percentage.toFixed(2) + '%'
            }
            messageStyle={styles.progressDialogMessageStyle}
          />
        </LanguageProvider>
      );
    } else {
      return null;
    }
  }
}
const styles = StyleSheet.create({
  progressDialogTitleStyle: {
    color: '#4d4e4f',
    fontSize: 18,
    margin: 20,
    marginBottom: 0,
  },
  progressDialogMessageStyle: {
    marginLeft: 20,
    fontSize: 16,
    color: '#2a2b2b'
  }
});
export default AppNavigator;
