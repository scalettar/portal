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

export default FolderTechnical;
