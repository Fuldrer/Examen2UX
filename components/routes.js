import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';
import HomeScreen from './Home'
import DrawerScreen from './Drawer'
import DoneScreen from './Done'

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeScreen
    },
    Done:{
        screen: DoneScreen
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('./images/menu-button.png')}/>
    }else{
        return <Image source={require('./images/left-arrow.png')}/>
    }
}

const StackNavigator = createStackNavigator({
    
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{
    navigationOptions: ({ navigation }) => ({
        title: 'Carlos List',
        headerLeft: 
        <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuImage style="styles.bar" navigation={navigation}/>
        </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

    })
});

export default StackNavigator;