import React from "react";
import { View, Modal } from "react-native";
import { Button, Text } from "native-base";

const Confirm = ({ visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, viewStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <View style={viewStyle}>
          <Text style={textStyle}>Are you sure to delete this?</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-end"
            }}
          >
            <Button onPress={onAccept} danger style={{ width: "50%" }}>
              <Text>Yes</Text>
            </Button>

            <Button onPress={onDecline} primary style={{ width: "50%" }}>
              <Text>No</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  viewStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: "80%",
    height: "20%",
    padding: 10
  },
  textStyle: {
    flex: 2,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0, 0.80)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export default Confirm;
