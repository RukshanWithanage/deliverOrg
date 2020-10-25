import axios from "axios";
import * as api from "./Api";
import { CustomAlertHolder } from "../components/CustomAlertView/customAlertHolder";
import { AsyncStorage, LayoutAnimation } from "react-native";
/**
 * Request Wrapper with default success/error actions
 */


const anit = function animateState(
  nextState: $Shape<State>,
  delay: number = 0
) {
  setTimeout(() => {
    this.setState(() => {
      LayoutAnimation.easeInEaseOut();
      return nextState;
    });
  }, delay);
};

const request = async function (options, isHeader = true) {
  let authHeader = null;
  if (isHeader) {
    authHeader = "application/json";
  }

  let accessToken = JSON.parse(await AsyncStorage.getItem("access_token"))[1];
  let SmartCompanyId = 0;
  let SmartYardId = 0;
  let SmartStationId = 0;

  const loginData = JSON.parse(await AsyncStorage.getItem("login_data"));

  if (loginData) {
    if (loginData.length == 10) {
      SmartCompanyId = JSON.parse(
        await AsyncStorage.getItem("userMultipleCompanyData")
      )[4];
      SmartYardId = JSON.parse(
        await AsyncStorage.getItem("userMultipleCompanyData")
      )[5];
      SmartStationId = JSON.parse(
        await AsyncStorage.getItem("userMultipleCompanyData")
      )[6];
    }
  }

  const client = axios.create({
    baseURL: api.BASE_URL,
    timeout: 8000,
    headers: {
      "Content-Type": authHeader,
      Authorization: "Bearer " + accessToken,
      SmartCompanyId: SmartCompanyId,
      SmartYardId: SmartYardId,
      SmartStationId: SmartStationId,
      ClientId: 2
    }
  });

  const onSuccess = function (response) {
    console.debug("Request Successful!", response);
    console.debug("Headers **********", client);
    return { response };
  };

  const onError = async function (error) {
    
    if (error.response) {
      console.debug(
        "Status ************************************************:",
        error.response.status
      );
      console.debug("Data:", error.response.data);
      console.debug("Headers:", error.response.headers);

      if (error.response.status == "400") {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage(
          error.response.data.title,
          error.response.data.detail
        );
      } else if (error.response.status == "401") {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage(
          "Token expired",
          "Your access token expired, please Re-Login"
        );
      } else {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage(
          "Sorry, Something went wrong",
          "We're working on it and we'll get fixed as soon as we can."
        );
      }
    } else {
      if (error.message == "Network Error") {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage(
          "Something failed",
          "The internet connection seems to be down. Please check that!"
        );
      }
    }

    return { error };
  };

  return await client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
