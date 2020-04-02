import React from "react";

import FolderTechnical from "../../components/folder-technical/folder-technical.component";
import FolderPersonal from "../../components/folder-personal/folder-personal.component";

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

	handleIconClick(iconName) {
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
        if (openedFolder === "Technical") {
            renderedFolder = <FolderTechnical />
        } else if (openedFolder === "Personal") {
            renderedFolder = <FolderPersonal />
        }
		return (
			<BackgroundContainer>
				<MainContainer>
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
									Technical
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("FolderPersonal")
									}
									IconType="Folder"
								></ItemIconContainer>
								<ItemTitleContainer>
									Personal
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemIconContainer
									onClick={() =>
										this.handleIconClick("FolderWebsites")
									}
									IconType="Folder"
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
