import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/routes'

export default class App extends React.Component {
  render() {
    return (
      <Menu></Menu>
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
