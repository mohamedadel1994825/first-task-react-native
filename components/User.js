import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage, } from 'react-native';
import React, { useState, useEffect } from 'react'
export const User = ({ name, username, email, phone}) => {
    const [isselected, setIsselected] = useState(true);
    const appName = ["name", name]
    const appUsername = ["username",username]
    const appUseremail = ["email",email]
    const appUserphone = ["phone",phone]

    let userCard=   isselected?<TouchableOpacity
    onPress={() => {
        AsyncStorage.multiSet([appName, appUsername,appUseremail,appUserphone]),
        setIsselected(false)
    }}
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
</TouchableOpacity>:<View></View>
    return (
        userCard
    )
}