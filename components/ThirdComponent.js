import { MyColors, Width } from '..';
import { View, Text,TouchableOpacity, FlatList, StyleSheet, } from 'react-native';
import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
export default class ThirdComponent extends Component {
    state = {
        userData: [''],
        data:[]
    }
    componentDidMount() {
        let userData = this.state.userData.slice();
        userData.push(userData);
        this.setState({userData});;
        this.addUser()
    }
    componentWillUpdate(){
    }
    addUser() {
        AsyncStorage.getItem('userdataObject')
            .then((response) => {
                return JSON.parse(response);
            })
            .then((parsedResponse) => {
                // this.setState({data:parsedResponse})
                this.setState(prevState => ({
                    userData: [parsedResponse,...prevState.userData,parsedResponse]
                  }))
            });
    }
    
    render() {
           
        
      
        let datasource=this.state.userData
            let User = ({id, name, username, email, phone }) =>
                <TouchableOpacity
                    activeOpacity={.9}
                    style={{
                        width: Width * .9, justifyContent: 'space-around', marginTop: Width * .02,
                        alignItems: 'center', backgroundColor: MyColors.usersBorderColor,
                        borderColor: MyColors.usersBorderColor,
                        borderWidth: Width * .01
                    }}>
                    <Text style={{
                        fontWeight: 'bold', fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>{name}</Text>
                    <Text style={{
                        fontWeight: 'bold', fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>{username}</Text>
                    <Text style={{
                        fontWeight: 'bold', fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>{email}</Text>
                    <Text style={{
                        fontWeight: 'bold', fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>{phone}</Text>
                </TouchableOpacity>
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.greenColor1, width: Width
            }} >
                <View style={{ height: Width*.9, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={datasource}
                        extraData={datasource}
                        renderItem={({ item, index }) =>
                            <User
                                name={item.appName}
                                username={item.appUsername}
                                email={item.appUseremail}
                                phone={item.appUserphone}
                                id={item.appUserId}
                            />
                        }
                        keyExtractor={({item, index}) => index+''}
                    />

                </View>

            </View>

        )
    }
}