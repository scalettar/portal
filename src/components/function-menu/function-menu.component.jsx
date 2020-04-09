import React from "react";

import {
  MenuContainer,
  LinksContainer,
  LinkContainer
} from "./function-menu.styles";

/* DESCRIPTION 
Contains a site menu which is toggled to be visible
or invisible by Header
*/

class FunctionMenu extends React.Component {
  render() {
    return (
      <MenuContainer
        onClick={this.props.onClick}
        isVisible={this.props.isVisible}
      >
        <LinksContainer>
          <LinkContainer to="/">Home</LinkContainer>
          <LinkContainer to="/articles">Articles</LinkContainer>
          <LinkContainer to="/about">About</LinkContainer>
        </LinksContainer>
      </MenuContainer>
    );
  }
}

export default FunctionMenu;
