import React from "react";

import {
	BackgroundContainer,
	MainContainer,
	SectionContainer,
	ItemsContainer,
	ItemContainer,
	ItemIconContainer,
	ItemTitleContainer
} from "./folder-technical.styles";

class FolderTechnical extends React.Component {
	state = {
		openedApp: "None"
	};

	handleIconClick(iconName) {
		if (iconName === "Resume") {
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
								<ItemIconContainer iconType="Github" />
								<ItemTitleContainer>Github</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer iconType="LinkedIn" />
								<ItemTitleContainer>
									LinkedIn
								</ItemTitleContainer>
							</ItemContainer>
                            <ItemContainer>
								<ItemIconContainer iconType="None" />
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
				</MainContainer>
			</BackgroundContainer>
		);
	}
}

export default FolderTechnical;
