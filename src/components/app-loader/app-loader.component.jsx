import React from "react";

import { BackgroundContainer, MainContainer } from "./app-loader.styles";

import AppConstruction from "../app-construction/app-construction.component";
import AppAboutPersonal from "../app-about-personal/about-personal.component";
import AppAboutTechnical from "../app-about-technical/app-about-technical.component";
// import AppLanguage from "../app-language/app-language.component";
// import AppHealth from "../../app-health/app-health.component";
// import AppMusic from "../../app-music/app-music.component";
// import AppKindo from "../../app-kindo/app-kindo.component";

class AppLoader extends React.Component {
	render() {
		let content;
		if (this.props.openedApp === "AboutPersonal") {
			content = <AppAboutPersonal />;
		} else if (this.props.openedApp === "AboutTechnical") {
			content = <AppAboutTechnical />;
		} else if (this.props.openedApp === "Language") {
            // content = <AppLanguage />;
            content = <AppConstruction />;
		} else if (this.props.openedApp === "Health") {
			// content = <AppHealth />;
			content = <AppConstruction />;
		} else if (this.props.openedApp === "Music") {
			// content = <AppMusic />;
			content = <AppConstruction />;
		} else if (this.props.openedApp === "Kindo") {
			// content = <AppKindo />;
			content = <AppConstruction />;
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
