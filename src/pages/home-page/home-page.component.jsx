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
	ItemDisplayContainer
} from "./home-page.styles";

import iconPortfolio from "../../assets/iconFolder.png";
import iconGithub from "../../assets/iconGithub.png";
import iconLinkedIn from "../../assets/iconLinkedIn.png";
import iconLanguage from "../../assets/iconDuolingo.png";
import iconHealth from "../../assets/iconActivity.png";
import iconMusic from "../../assets/iconPiano.png";
import iconKindo from "../../assets/iconKindo.jpg";

class HomePage extends React.Component {
	render() {
		return (
			<BackgroundContainer>
				<MainContainer>
					<MainTitleContainer>Home</MainTitleContainer>
					<SectionContainer>
						<SectionTitleContainer>Technical</SectionTitleContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemDisplayContainer
									alt="[portfolio]"
									src={iconPortfolio}
								/>
								<ItemTitleContainer>Projects</ItemTitleContainer>
							</ItemContainer>
                            <ItemContainer>
								<ItemDisplayContainer
									alt="[github]"
									src={iconGithub}
								/>
								<ItemTitleContainer>
									Github
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemDisplayContainer
									alt="[linkedin]"
									src={iconLinkedIn}
								/>
								<ItemTitleContainer>
									LinkedIn
								</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
					<SectionContainer>
						<SectionTitleContainer>Personal</SectionTitleContainer>
						<ItemsContainer>
							<ItemContainer>
								<ItemDisplayContainer
									alt="[language]"
									src={iconLanguage}
								/>
								<ItemTitleContainer>
									Language
								</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemDisplayContainer
									alt="[health]"
									src={iconHealth}
								/>
								<ItemTitleContainer>Health</ItemTitleContainer>
							</ItemContainer>
							<ItemContainer>
								<ItemDisplayContainer
									alt="[music]"
									src={iconMusic}
								/>
								<ItemTitleContainer>Music</ItemTitleContainer>
							</ItemContainer>
						</ItemsContainer>
					</SectionContainer>
					<SectionContainer>
						<SectionTitleContainer>Websites</SectionTitleContainer>
						<ItemsContainer>
							<ItemContainer>
                                <ItemDisplayContainer alt="[kindo]" src={iconKindo}/>
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
