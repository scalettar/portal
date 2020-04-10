import React from "react";

import {
	BackgroundContainer,
	MainContainer,
	SectionContainer,
	ItemsContainer,
	ItemContainer,
	ItemIconContainer,
	ItemTitleContainer
} from "./folder-personal.styles";

import AppLoader from "../app-loader/app-loader.component";

class FolderPersonal extends React.Component {
	state = {
		openedApp: "None"
	};

	handleIconClick(iconName) {
		if (iconName === "AboutPersonal") {
			this.setState({
				openedApp: "AboutPersonal"
			});
		} else if (iconName === "Language") {
			this.setState({
				openedApp: "Language"
			});
		} else if (iconName === "Health") {
			this.setState({
				openedApp: "Health"
			});
		} else if (iconName === "Music") {
			this.setState({
				openedApp: "Music"
			});
		} else if (iconName === "Kindo") {
			this.setState({
				openedApp: "Kindo"
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
										this.handleIconClick("Language")
									}
									iconType="Language"
								/>
								<ItemTitleContainer>
									Language
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("Health")
									}
									iconType="Health"
								/>
								<ItemTitleContainer>
									Health
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("Music")
									}
									iconType="Music"
								/>
								<ItemTitleContainer>Music</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
					<SectionContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("AboutPersonal")
									}
									iconType="AboutPersonal"
								/>
								<ItemTitleContainer>About</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="None" />
								<ItemTitleContainer></ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="None" />
								<ItemTitleContainer></ItemTitleContainer>
							</ItemContainer>
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

export default FolderPersonal;
