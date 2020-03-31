import React from "react";

import { MenuContainer } from "./function-menu.styles";

class FunctionMenu extends React.Component {
  render() {
    return (
      <MenuContainer
        onClick={this.props.onClick}
        isVisible={this.props.isVisible}
      >
        <h2>
          <a href="/technical">Technical</a>
        </h2>
        <h2>
          <a href="/personal">Personal</a>
        </h2>
        <h2>
          <a href="/projects">Projects</a>
        </h2>
        <h2>
          <a href="/articles">Articles</a>
        </h2>
      </MenuContainer>
    );
  }
}

export default FunctionMenu;
