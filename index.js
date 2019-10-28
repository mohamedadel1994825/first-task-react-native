import React, { Component } from 'react'
import { Width, Height, MyColors } from './components/consts';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Main from './components/screens/Main';
import UserSelected from './components/screens/UserSelected';
import Users from './components/screens/Users';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import store from './store'
import { Provider } from 'react-redux'
import Splash from './components/screens/Splash';
const MainNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    MainScreen: {
        screen: Main,
    },
    Users: {
        screen: Users,
    },
    UserSelected: {
        screen: UserSelected,
    }
})

const UserApp = createAppContainer(MainNavigator);
const RNRedux = () => (
    <Provider store={store}>
        <UserApp />
    </Provider>)
AppRegistry.registerComponent(appName, () => RNRedux);
export {
    Width,
    Height,
    MyColors
}