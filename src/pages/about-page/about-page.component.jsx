import React from "react";

import {
	BackgroundContainer,
	MainContainer,
	MainTitleContainer,
	TextContainer
} from "./about-page.styles";

class AboutPage extends React.Component {
	render() {
		return (
			<BackgroundContainer>
				<MainContainer>
					<MainTitleContainer>About</MainTitleContainer>
					<TextContainer>
						<p>
							This site was created using React and javascript.
							Styling was implemented using styled-components.
						</p>
						<p>
							The Github repository can be found{" "}
							<a
								href="https://github.com/scalettar/portal"
								rel="noopener noreferrer"
								target="_blank"
							>
								HERE
							</a>
                            .
						</p>
					</TextContainer>
				</MainContainer>
			</BackgroundContainer>
		);
	}
}

export default AboutPage;
