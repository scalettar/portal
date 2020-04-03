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

class FolderPersonal extends React.Component {
    state = {
        openedApp: "None"
    }

    handleIconClick(iconName) {
		if (iconName === "Language") {
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
				</MainContainer>
			</BackgroundContainer>
		);
	}
}

export default FolderPersonal;
