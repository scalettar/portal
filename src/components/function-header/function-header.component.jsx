import React from "react";
import FunctionMenu from "../function-menu/function-menu.component";

import {
	ButtonContainer,
	BackgroundContainer,
	HeaderContainer,
	TitleContainer
} from "./function-header.styles";

/* DESCRIPTION
Contains a button which toggles the FunctionMenu component to be visible or invisible.
*/

class Header extends React.Component {
	state = {
		visible: false
	};

	handleClick() {
		this.setState({
			visible: !this.state.visible
		});
	}

	render() {
		return (
			<BackgroundContainer>
				<HeaderContainer>
					<ButtonContainer onClick={() => this.handleClick()}>
						☰
					</ButtonContainer>
					<TitleContainer to="/">Daniel Scalettar</TitleContainer>
				</HeaderContainer>
				<FunctionMenu
					onClick={() => this.handleClick()}
					isVisible={this.state.visible}
				/>
			</BackgroundContainer>
		);
	}
}

export default Header;
