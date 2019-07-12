import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Text style={{ fontSize: 18, paddingLeft: 15 }}>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
