import { MyColors, Width } from '..';
import { View, Text, AsyncStorage } from 'react-native';
import React, { Component } from 'react'
export default class ThirdComponent extends Component {
    state = {
        name:['']
    }
    // AsyncStorage.setItem('name', name)

    render() {
        AsyncStorage.getItem('name').then((name) => {
            this.setState({name})
        })
        const{name}=this.state
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.greenColor1
            }} >
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>its Third Component</Text>
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>{name}+++</Text>

            </View>
        )
    }
}