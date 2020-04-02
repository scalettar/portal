import React from "react";

import {
	BackgroundContainer,
	MainContainer,
	MainTitleContainer,
	SectionContainer,
	SectionTitleContainer,
	ItemsContainer,
	ItemContainer,
	ItemTitleContainer,
	ItemIconContainer
} from "./home-page.styles";

class HomePage extends React.Component {
	state = {
		openedApp: "None",
		openedFolder: "Technical"
	};

	handleIconClick(iconName) {
		if (iconName === "FolderTechnical") {
			this.setState({
				openedFolder: "Technical"
			});
		} else if (iconName === "FolderPersonal") {
			this.setState({
				openedFolder: "Personal"
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
					<MainTitleContainer>Home</MainTitleContainer>
					<SectionContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("FolderTechnical")
									}
									IconType="Folder"
								></ItemIconContainer>
								<ItemTitleContainer>
									Projects
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="Github" />
								<ItemTitleContainer>Github</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="LinkedIn" />
								<ItemTitleContainer>
									LinkedIn
								</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
					<SectionContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemIconContainer iconType="Language" />
								<ItemTitleContainer>
									Language
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="Health" />
								<ItemTitleContainer>Health</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="Music" />
								<ItemTitleContainer>Music</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
					<SectionContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemIconContainer iconType="Kindo" />
								<ItemTitleContainer>Kindo</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
				</MainContainer>
			</BackgroundContainer>
		);
	}
}

export default HomePage;
