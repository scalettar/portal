import React from "react";

import { BackgroundContainer, MainContainer } from "./app-loader.styles";

import AppLanguage from "../app-language/app-language.component";

class AppLoader extends React.Component {
	render() {
		let content;
		if (this.props.openedApp === "Language") {
			content = <AppLanguage />;
		}
		return (
			<BackgroundContainer
				onClick={this.props.onClick}
				openedApp={this.props.openedApp}
			>
				<MainContainer>{content}</MainContainer>
			</BackgroundContainer>
		);
	}
}

export default AppLoader;
