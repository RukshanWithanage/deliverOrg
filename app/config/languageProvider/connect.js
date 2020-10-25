import React, { Component } from "react";
import PropTypes from "prop-types";

const connectLang = ComponentToWrap => {
	return class LanguageComponent extends Component {

		static navigationOptions = {
			 header: null,
		};

		constructor(p, c) {
			super(p, c);
			this.update = () => this.forceUpdate();
		}
		static contextTypes = {
			strings: PropTypes.object.isRequired,
			language: PropTypes.object.isRequired
		};

		componentDidMount(): void {
			// subscribe to future theme changes
			this.subscribe();
		}
		componentWillUnmount(): void {
			// unsubscribe to changes
			this.unsubscribe();
		}
		render() {
			const { strings, language } = this.context;
			return (
				<ComponentToWrap
					{...this.props}
					strings={strings}
					language={language}
				/>
			);
		}
		subscribe = () => {
			this.context.language.subscribe(this.update);
		};
		unsubscribe = () => {
			this.context.language.unsubscribe(this.update);
		};
	};
};
export default connectLang;
