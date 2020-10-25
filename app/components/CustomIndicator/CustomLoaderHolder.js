export class CustomLoaderHolder {
	static customLoader;

	static setCustomLoader(customLoader) {
		this.customLoader = customLoader;
	}

	static getCustomLoader() {
		return this.customLoader;
	}
}
