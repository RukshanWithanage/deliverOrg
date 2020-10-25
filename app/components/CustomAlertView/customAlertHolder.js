export class CustomAlertHolder {
	static alert;

	static setAlert(alert) {
		this.alert = alert;
	}

	static getAlert() {
		return this.alert;
	}
}
