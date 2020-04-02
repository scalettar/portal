import React from "react";

import FolderTechnical from "../../components/folder-technical/folder-technical.component";
import FolderPersonal from "../../components/folder-personal/folder-personal.component";
import FolderWebsites from "../../components/folder-websites/folder-websites.component";

import {
	BackgroundContainer,
	MainContainer,
	SectionContainer,
	ItemsContainer,
	ItemContainer,
	ItemTitleContainer,
	ItemIconContainer
} from "./home-page.styles";

class HomePage extends React.Component {
	state = {
		openedFolder: "Technical"
	};

	handleIconHover(iconName) {
		if (iconName === "FolderTechnical") {
			this.setState({
				openedFolder: "Technical"
			});
		} else if (iconName === "FolderPersonal") {
			this.setState({
				openedFolder: "Personal"
			});
        } else if (iconName === "FolderWebsites") {
            this.setState({
                openedFolder: "Websites"
            });
        } else {
            this.setState({
                openedFolder: "None"
            })
        }
	}

	render() {
        const openedFolder = this.state.openedFolder;
        let renderedFolder;
        let iconTechnical;
        let iconPersonal;
        let iconWebsites;
        if (openedFolder === "Technical") {
            renderedFolder = <FolderTechnical />
            iconTechnical = "FolderOpened";
            iconPersonal = "FolderClosed";
            iconWebsites = "FolderClosed";
        } else if (openedFolder === "Personal") {
            renderedFolder = <FolderPersonal />
            iconPersonal = "FolderOpened"
            iconTechnical = "FolderClosed"
            iconWebsites = "FolderClosed"
        } else if (openedFolder === "Websites") {
            renderedFolder = <FolderWebsites />
            iconWebsites = "FolderOpened"
            iconTechnical = "FolderClosed"
            iconPersonal = "FolderClosed"
        }
		return (
			<BackgroundContainer>
				<MainContainer>
					<SectionContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemIconContainer
									onMouseEnter={() =>
										this.handleIconHover("FolderTechnical")
									}
									iconType={iconTechnical}
								></ItemIconContainer>
								<ItemTitleContainer>
									Technical
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer
									onMouseEnter={() =>
										this.handleIconHover("FolderPersonal")
									}
									iconType={iconPersonal}
								></ItemIconContainer>
								<ItemTitleContainer>
									Personal
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer
									onMouseEnter={() =>
										this.handleIconHover("FolderWebsites")
									}
									iconType={iconWebsites}
								></ItemIconContainer>
								<ItemTitleContainer>
									Websites
								</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
                    {renderedFolder}
				</MainContainer>
			</BackgroundContainer>
		);
	}
}

export default HomePage;
