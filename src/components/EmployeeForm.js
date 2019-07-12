import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Item, Label, Input } from "native-base";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <Item fixedLabel>
          <Label>Name</Label>
          <Input
            placeholder="Jon Doe"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({
                prop: "name",
                value
              })
            }
          />
        </Item>
        <Item fixedLabel>
          <Label>Phone</Label>
          <Input
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({
                prop: "phone",
                value
              })
            }
          />
        </Item>
        <Text style={{ alignSelf: "center", marginTop: 10 }}>
          Select Shift Below
        </Text>
        <Item>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursay" value="Thursay" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </Item>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
