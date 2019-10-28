import React, { Component } from 'react'
import { Width, Height, MyColors } from './components/consts';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App'
import MainComponent from './components/MainComponent';
import ThirdComponent from './components/ThirdComponent';
import DetailComponent from './components/DetailComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import store from './store'
import { Provider } from 'react-redux'
import SplachScreen from './components/SplachScreen';
const MainNavigator = createStackNavigator({

    Splash: {
        screen: SplachScreen,
    },
    MainScreen: {
        screen: MainComponent,

    },
    Users: {
        screen: DetailComponent,
        navigationOptions: {
        }
    },
    UserSelected: {
        screen: ThirdComponent,
        navigationOptions: {
        }
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