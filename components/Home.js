import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View,  Button,FlatList,AsyncStorage,TextInput,Keyboard,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Header } from "react-native-elements";
import List from "./List";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", todo: "Insert a task", checked: false }],
      dialog: false,
      cont: 1
    };
  }

  handleOpen = () => {
    this.props.navigation.openDrawer();
  };

  handleAdd = dialog => {
    this.props.screenProps.showDialog(dialog);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
      </View>
    );
  }
}

/*export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
});*/
