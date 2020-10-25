
import moment from 'moment';

export function utcToTimeInHourMinuteIn12HourFormate(utcstring) {
    const time = moment(Date(utcstring)).format('lll');
    return time
}

export function isEmailValid(email) {
    let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/
    return pattern.test(String(email).toLowerCase())
}

export function isMobileValid(mobile) {
    let pattern = /^(([+]46\s*[0]*[1-9]\d{0,2})|([0]\d{1,3}[-]))((\d{2}(\d{2}){2})|(\d{3}(\d{3})*(\d{2})+))$/
    return pattern.test(String(mobile).toLowerCase())
}

export function isNumberOnly(SSN){
    let pattern = /^[0-9]*$/
    return pattern.test(String(SSN).toLowerCase())
}

var increment = 0;
export function incrementPage() {
    return ++increment;
}

export function getCurrentIncrementPage() {
    return increment;
}

export function getCurrentDecrementPage() {
    if (increment == 0) {
        return (increment = 0);
    } else {
        return --increment;
    }
}

export function resetIncrementPage() {
    increment = 0;
}

export function isEmptyObj(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export function nativeCurrencyConvert(value) {
    const roundTo = require("round-to");
    let roundedVal = value;
    if (value != null) {
        let Nvalue = value.toFixed(4);
        let NroundedVal = roundTo(parseFloat(Nvalue), 3);
        roundedVal = NroundedVal.toFixed(3).replace(".", ",");
    }
    return roundedVal;
}

export function nativeWeightConvert(value) {
    let roundedVal = value;
    if (value != null) {
        roundedVal = value.toFixed(0);
    }
    return roundedVal;
}

export function decimalRound(value, roundVal = 3) {
    const roundTo = require("round-to");
    let roundedVal = value;
    if (value != null) {
        let Nvalue = value.toFixed((roundVal + 1));
        let NroundedVal = roundTo(parseFloat(Nvalue), roundVal);
        roundedVal = NroundedVal.toFixed(roundVal);
    }
    return roundedVal;
}

export function isEmpty(element) {
    return Object.keys(element) == 0
}

export function replaceSpecialCharacters(value){
    return value.replace('[ ](?=[ ])|[^-_,A-Za-z0-9 ]+','',);
}

export function validateArticleName(value){
    return value.replace(/[ ](?=[ ])|[^-_,A-Za-z0-9-ZäöåÄÖÅ ]+/g, "");
}

export function digitsOnly(value){
    return value.replace(/[^0-9]/g, "");
}

export function digitsValidation(value){
    return value.replace(/[^-0-9]*([-])?$/g, "");
}

export function frontDoubleDotsValidation(value){
    if(value != ".."){
        return true;
    } else { 
        return false
    }
}

export function matchLatestData(responseValue){
    if (typeof responseValue != 'undefined' && responseValue != null) {
            return responseValue;
    } else {
            return "";
    }
}