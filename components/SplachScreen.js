import { MyColors, Width, Height } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react'

export default class SplachScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: MyColors.blueWhite,
            elevation: 0,
            shadowOpacity: 0
        }
    };
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('MainScreen')
        }, 1000);
    }
    render() {
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.blueWhite,
                 width: Width, height: '100%'
            }} >
                <Text style={{
                    fontSize: Width * .09,
                    textAlign: 'center', color: 'white',marginBottom:Width*.2
                }}>Users App </Text>
            </View>
        )
    }
}

