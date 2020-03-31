import React from 'react';
import FunctionMenu from '../function-menu/function-menu.component';

import { ButtonContainer, MainContainer } from './function-menu-toggle.styles';

class FunctionMenuToggle extends React.Component {
  state = {
    visible: false
  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <MainContainer>
        <ButtonContainer onClick={() => this.handleClick()}>
        </ButtonContainer>
        <FunctionMenu onClick={() => this.handleClick()} isVisible={this.state.visible} />
      </MainContainer>
    )
  }
}

export default FunctionMenuToggle;
