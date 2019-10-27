import React, { Component } from 'react'
import { Width, Height, MyColors } from './components/consts';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App'
import MainComponent from './components/MainComponent';
import ThirdComponent from './components/ThirdComponent';
import DetailComponent from './components/DetailComponent';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import store from './store'
import {Provider} from 'react-redux'
const MainNavigator  = createStackNavigator({
MainScreen:{
    screen:MainComponent,
  
},
DetailScreen:{
    screen:DetailComponent,
    navigationOptions:{
        headerTitle:'Detail',
    }
},
ThirdScreen:{
    screen:ThirdComponent,
    navigationOptions:{
        headerTitle:'Third',
    }
}
})

const UserApp = createAppContainer(MainNavigator );
const RNRedux = () => (
    <Provider store = { store }>
      <UserApp />
    </Provider>)
AppRegistry.registerComponent(appName, () => RNRedux);
export {
    Width,
    Height,
    MyColors
}