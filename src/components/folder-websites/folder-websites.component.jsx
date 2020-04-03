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
} from "./folder-websites.styles";

class FolderWebsites extends React.Component {
	state = {
		openedApp: "None"
	};

	handleIconClick(iconName) {
		if (iconName === "Kindo") {
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
							<ItemLinkContainer href="https://playkindo.com" target="_blank">
								<ItemContainer>
									<ItemIconContainer iconType="Kindo" />
									<ItemTitleContainer>
										Kindo
									</ItemTitleContainer>
								</ItemContainer>
							</ItemLinkContainer>
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
			</BackgroundContainer>
		);
	}
}

export default FolderWebsites;
