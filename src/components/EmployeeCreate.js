import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text
} from "native-base";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <EmployeeForm {...this.props} />
            <Button primary block onPress={this.onButtonPress.bind(this)}>
              <Text>Create</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
