import React, { Component } from "react";
import { Header, Left, Body, Right, Title } from "native-base";

class MyHeader extends Component {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>{this.props.headerTitle}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default MyHeader;
