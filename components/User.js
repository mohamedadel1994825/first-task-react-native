import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage, } from 'react-native';
import React, { useState, useEffect } from 'react'
export const User = ({ name, username, email, phone, selected, onSelect, id }) => {
    // const [name, setName,username, setUsername,email,
    //      setEmail,phone,setPhone,name, setName,] = useState('value');

    return (
        <TouchableOpacity
            onPress={() => {
                onSelect(id),
                AsyncStorage.setItem('name', name)
            }}
            activeOpacity={.9}
            style={{
                width: Width * .9, justifyContent: 'space-around', marginTop: Width * .02,
                alignItems: 'center', backgroundColor: selected ? 'orange' : MyColors.usersBorderColor,
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
    )
}