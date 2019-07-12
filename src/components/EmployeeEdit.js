import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { Container, Content, Form, Button, Text } from "native-base";
import EmployeeForm from "./EmployeeForm";
import _ from "lodash";
import Communications from "react-native-communications";
import Confirm from "./Confirm";

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <EmployeeForm {...this.props} />
            <Button primary block onPress={this.onButtonPress.bind(this)}>
              <Text>Save Changes</Text>
            </Button>
            <Button primary block onPress={this.onTextPress.bind(this)}>
              <Text>Text Schedule</Text>
            </Button>
            <Button
              primary
              block
              onPress={() =>
                this.setState({ showModal: !this.state.showModal })
              }
            >
              <Text>Fire Employee</Text>
            </Button>
            <Confirm
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            />
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
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
