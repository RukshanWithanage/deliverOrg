import { CustomAlertHolder } from "../../components/CustomAlertView/customAlertHolder";

export const showNetworkAlert = (isConnected) => {
    if(!isConnected)
    setTimeout(() => {
        CustomAlertHolder.getAlert().showAlertSingleButtonMessage('Something failed', 'The internet connection seems to be down. Please check that!')
    }, 200);
}