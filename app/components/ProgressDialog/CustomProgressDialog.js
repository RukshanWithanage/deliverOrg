import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ProgressDialog } from "react-native-simple-dialogs";
let downloading = false;
let percentage = 0;
export default class CustomProgressDialog extends Component {

  constructor(props) {
    super(props);

  }

  showProgress(percentage) {
    downloading = true;
    percentage = percentage;
  }
  Progress(percentage) {
    percentage = percentage;
  }

  hideProgress() {
    downloading = false;
  }

  render() {
    return (
      <View>
        <ProgressDialog
          visible={true}
          title={"Update downloading "}
          titleStyle={styles.progressTitleStyle}
          message={
            percentage == 0
              ? "Please, wait..."
              : percentage.toFixed(2) + "%"
          }
          messageStyle={styles.progressMessageStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressTitleStyle: {
    color: "#4d4e4f",
    fontSize: 18,
    margin: 20,
    marginBottom: 0
  },
  progressMessageStyle: {
    marginLeft: 20,
    fontSize: 16,
    color: "#2a2b2b"
  }
});
