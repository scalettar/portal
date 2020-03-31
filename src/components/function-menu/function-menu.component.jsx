import React from "react";

import { MenuContainer, LinksContainer } from "./function-menu.styles";

/* DESCRIPTION 
Contains a site menu which is toggled to be visible
or invisible by FunctionMenuToggle
*/

class FunctionMenu extends React.Component {
  render() {
    return (
      <MenuContainer
        onClick={this.props.onClick}
        isVisible={this.props.isVisible}
      >
        <LinksContainer>
          <a href="/home">Home</a>
          <a href="/technical">Technical</a>
          <a href="/personal">Personal</a>
          <a href="/projects">Projects</a>
          <a href="/articles">Articles</a>
        </LinksContainer>
      </MenuContainer>
    );
  }
}

export default FunctionMenu;
