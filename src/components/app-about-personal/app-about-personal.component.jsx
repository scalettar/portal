import React from "react";

import {
    BackgroundContainer,
    MainContainer
} from "./app-about-personal.styles";

class AppAboutPersonal extends React.Component {
    render() {
        return(
            <BackgroundContainer openedApp={this.props.openedApp}>
                <MainContainer>About Me
                    <div onClick={this.props.onClick}>Close</div>
                </MainContainer>
            </BackgroundContainer>
        )
    }
}

export default AppAboutPersonal;