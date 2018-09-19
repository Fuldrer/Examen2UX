import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Menu from './routes'
import Icon from "react-native-vector-icons/FontAwesome";
import { FloatingAction } from "react-native-floating-action";
import DialogInput from "react-native-dialog-input";
import List from './List';

const actions = [
  {
    text: "Add Task",
    icon: <Icon name="plus" size={15} />,
    name: "bt_add",
    position: 1,
    color: "#D7DF01"
  }
];

export default class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", todo: "Insert a task", checked: false }],
      dialog: true,
      cont: 1
    };
  }

  sendInput = inputText => {
    this.setState({ dialog: false });
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

  showDialog = dialog => {
    this.setState({ dialog: dialog });
  };

  toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    this.setState({ todos: newList });
  };

  render() {
    return (
        <View style={{ flex: 1 }}>
        <FlatList
        data={this.props.screenProps.todos}
        renderItem={({ item }) => (
          <List
            task={item}
            toggleCheck={this.props.screenProps.toggleCheck}
            deleteTask={this.props.screenProps.deleteTask}
          />
        )}
        keyExtractor={(item, index) => item.id}
        style={{ flex: 1, marginTop: 20, width: "100%" }}
        />
        <View screenProps={{
            todos: this.state.todos,
            toggleCheck: this.toggleCheck,
            deleteTask: this.deleteTask,
          }}></View>
        <DialogInput
          isDialogVisible={this.state.dialog}
          title={"Insert Task"}
          hintInput={"Write Task Name"}
          submitInput={inputText => {
            this.sendInput(inputText);
          }}
          closeDialog={() => {
            this.showDialog(false);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
