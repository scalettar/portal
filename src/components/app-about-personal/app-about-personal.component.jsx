import React from "react";

import {
    BackgroundContainer,
    MainContainer
} from "./app-about-personal.styles";

class AppAboutPersonal extends React.Component {
    render() {
        return(
            <BackgroundContainer onClick={this.props.onClick} openedApp={this.props.openedApp}>
                <MainContainer>About Me</MainContainer>
            </BackgroundContainer>
        )
    }
}

export default AppAboutPersonal;