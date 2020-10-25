import queryString from "query-string";
import { AsyncStorage } from "react-native";
import { PurchasingCustomerType } from "../../../../enum/purchasingCustomerType";

export const opts = {
  mode: "cors",
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Request-Headers": "Content-Type"
  }
};

export const fetchError = () => {
  throw new Error("There was an error fetching your data");
};

const throwErrorResponse = resp => {
  throw resp;
};

const qs = params =>
  Object.entries(params).length ? `?${queryString.stringify(params)}` : "";

const processResponse = async resp => {
  try {
    const body = await resp.json();

    if (!body.data) {
      return resp.ok ? body : throwErrorResponse(body);
    }

    return resp.ok && body.success ? body.data : throwErrorResponse(body.error);
  } catch (e) {
    return fetchError(e);
  }
};
// data
export const get = async (url, params = {}) => {

  let authHeader = "application/json";
  let accessToken = JSON.parse(await AsyncStorage.getItem("login_data"))[1];

  var customerIds = params.excludedExternalNumbers + "";

  var customerArray = customerIds.split(",");
  if (customerArray.length > 0) {

    var NewcustomerIds = "";
    for (let id of customerArray) {
      id + "";
      if (id.length > 0) {
        NewcustomerIds += id + ",";
      }
    }
    params.excludedExternalNumbers = NewcustomerIds;
  }


  var lastChar = params.excludedExternalNumbers.substr(params.excludedExternalNumbers.length - 1); // => "1"
  if (lastChar == ",") {
    var newStr = params.excludedExternalNumbers.substring(0, params.excludedExternalNumbers.length - 1);
    params.excludedExternalNumbers = newStr;
  }

  const response = await fetch(
    `${url +
    params.search +
    "/excludedPurchasingCustomerIds/" +
    params.excludedExternalNumbers + "/purchasingCustomerTypeIds/" + PurchasingCustomerType.INDIVIDUAL}`,
    {
      ...opts,
      method: "GET",
      headers: {
        "Content-Type": authHeader,
        Authorization: "Bearer " + accessToken,
        SmartCompanyId: params.companyId,
        SmartYardId: params.SmartYardId,
        SmartStationId: params.SmartStationId,
        ClientId: 2
      }
    }
  ).catch(fetchError);

  return processResponse(response);
};
