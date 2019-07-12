import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import MyHeader from "./MyHeader";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <Button primary block onPress={this.onButtonPress.bind(this)}>
        <Text>Login</Text>
      </Button>
    );
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={{ fontSize: 20, alignSelf: "center", color: "red" }}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                label="email"
                placeholder="email@gmail.com"
                value={this.props.email}
                autoCapitalize="none"
              />
            </Item>
            <Item>
              <Input
                secureTextEntry
                label="password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </Item>
            {this.renderError()}
            {this.renderButton()}
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
