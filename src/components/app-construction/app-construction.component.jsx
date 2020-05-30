import React from "react";

import {
	BackgroundContainer,
	MessageContainer
} from "./app-construction.styles";

class AppConstruction extends React.Component {
	render() {
		return (
			<BackgroundContainer>
				<MessageContainer>
					This app is under construction.
				</MessageContainer>
				<MessageContainer>Click anywhere to close.</MessageContainer>
			</BackgroundContainer>
		);
	}
}

export default AppConstruction;
