import { MyColors, Width } from '..';
import { View, Text } from 'react-native';
import React, { Component } from 'react'
export default class ThirdComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center',
             alignItems: 'center',backgroundColor:MyColors.greenColor1 }} >
                <Text style={{fontWeight:'bold',fontSize:Width*.07,
                textAlign:'center',color:'white'}}>its Third Component</Text>


            </View>
        )
    }
}
