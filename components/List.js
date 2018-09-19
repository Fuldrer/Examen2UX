import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleToggle = () => {
    this.props.toggleCheck(this.props.task.id);
  };

  handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  };

  render() {
    if (this.props.task.checked == true) {
      icon = (
        <Icon.Button
          name="check-square"
          size={20}
          backgroundColor="transparent"
          color="#694fad"
          borderRadius={0}
          onPress={this.handleToggle}
        />
      );
    } else {
      icon = (
        <Icon.Button
          name="square"
          size={20}
          backgroundColor="transparent"
          color="#694fad"
          borderRadius={0}
          onPress={this.handleToggle}
        />
      );
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {icon}
        <Text>{this.props.task.todo}</Text>
        <Icon.Button
          name="trash"
          size={20}
          backgroundColor="transparent"
          color="#694fad"
          borderRadius={0}
          onPress={this.handleDelete}
        />
      </View>
    );
  }
}
