import React from "react";

import {
	BackgroundContainer,
	MainContainer,
	SectionContainer,
	ItemsContainer,
	ItemContainer,
	ItemIconContainer,
	ItemTitleContainer,
	ItemLinkContainer
} from "./folder-technical.styles";

import AppLoader from "../app-loader/app-loader.component";

class FolderTechnical extends React.Component {
	state = {
		openedApp: "None"
	};

	handleIconClick(iconName) {
		if (iconName === "AboutTechnical") {
			this.setState({
				openedApp: "AboutTechnical"
			});
		} else if (iconName === "Resume") {
			this.setState({
				openedApp: "Resume"
			});
		} else {
			this.setState({
				openedApp: "None"
			});
		}
	}

	render() {
		return (
			<BackgroundContainer>
				<MainContainer>
					<SectionContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("AboutTechnical")
									}
									iconType="AboutTechnical"
								/>
								<ItemTitleContainer>About</ItemTitleContainer>
							</ItemContainer>
							<ItemLinkContainer
								href="https://github.com/scalettar"
								target="_blank"
							>
								<ItemContainer>
									<ItemIconContainer iconType="Github" />
									<ItemTitleContainer>
										Github
									</ItemTitleContainer>
								</ItemContainer>
							</ItemLinkContainer>
							<ItemLinkContainer
								href="https://www.linkedin.com/in/dscalettar/"
								target="_blank"
							>
								<ItemContainer>
									<ItemIconContainer iconType="LinkedIn" />
									<ItemTitleContainer>
										LinkedIn
									</ItemTitleContainer>
								</ItemContainer>
							</ItemLinkContainer>
						</ItemsContainer>
					</SectionContainer>
				</MainContainer>
				<AppLoader
					onClick={() => this.handleIconClick("None")}
					openedApp={this.state.openedApp}
				/>
			</BackgroundContainer>
		);
	}
}

export default FolderTechnical;
