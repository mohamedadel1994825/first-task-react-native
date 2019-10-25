import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react'
export const User = ({ name, username, email, address, phone }) => {
    return (
        <View style={{
            width: Width * .9, justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: 'red'
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
            {/* <View style={{backgroundColor:'yellow',
                            width:'100%',height:Width*.1}}>
                {
                    address.map(address => {
                        return(
                            <View style={{ justifyContent: 'center', alignItems: 'center',
                            width:'100%',height:Width*.1 }}>
                            <Text style={{ margin: 5, color: 'white', fontSize: Width * .05 }}>{address.street}</Text>
                            <Text  style={{ margin: 5, color: 'white', fontSize: Width * .05 }}>{address.suite}</Text>
                            <Text  style={{ margin: 5, color: 'white', fontSize: Width * .05 }}>{address.city}</Text>
                            <Text  style={{ margin: 5, color: 'white', fontSize: Width * .05 }}>{zipcode.street}</Text>
                            </View>

                        )
                           
                    }
                        
                    )

                    
                }
            </View> */}


        </View>
    )
}