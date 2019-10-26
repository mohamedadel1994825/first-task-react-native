import { MyColors, Width } from '..';
import { View, Text, AsyncStorage } from 'react-native';
import React, { Component } from 'react'
export default class ThirdComponent extends Component {
    state = {
        userData: [''],
    }
    // AsyncStorage.setItem('name', name)
    componentDidMount() {
        this.addUser()
    }
    addUser = async () => {
        await AsyncStorage.multiGet(['name', 'username', 'email',
            'phone']).then((response) => {
                this.setState({ userData: response })
            })
    }
    render() {

        let datasource = this.state.userData
        // let usersInfo = datasource.push(this.state.userData)
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.greenColor1
            }} >
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>its Third Component</Text>
                {/* <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>{datasource}+++</Text> */}
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .07,
                    textAlign: 'center', color: 'white'
                }}>{datasource}+++</Text>

            </View>
        )
    }
}