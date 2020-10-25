import axios from "axios";
import * as api from "./Api";
import { CustomAlertHolder } from "../components/CustomAlertView/customAlertHolder";

export const instance = axios.create({
	baseURL: api.BASE_URL,
	timeout: 8000,
});

export function sendPostData(url, params, header) {
	return new Promise((resolve, reject) => {
		instance
			.post(`${url}`, params)
			.then(response => { 	
				if (response.status == 200) {		
					resolve(response.data);
				}
			})
			.catch(error => {
				CustomAlertHolder.getAlert().showAlertSingleButtonMessage('Sorry, Something went wrong', "We're working on it and we'll get fixed as soon as we can.")
			})
			.finally(() => {
			});
	});
}

export function sendPutData(url, params, header) {
	return instance.put(`${url}`, { params })
		.then(res => res.data)
		.catch(error => {
			CustomAlertHolder.getAlert().showAlertSingleButtonMessage('Something failed', 'The internet connection seems to be down. Please check that!')
			throw error
		});
}

export function sendGetData(url, params, header) {
	return instance.get(`${url}`, { params })
		.then(res => res.data)
		.catch(error => {
			CustomAlertHolder.getAlert().showAlertSingleButtonMessage('Something failed', 'The internet connection seems to be down. Please check that!')
			throw error
		});
}
