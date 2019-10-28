import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react'
export default UserCard=({onPress,id,name,username,email,phone})=>{
    return(
        <TouchableOpacity
        onPress={
            onPress  
           
        }
        activeOpacity={.9}
        style={{
            width: Width * .9, justifyContent: 'space-around', marginTop: Width * .02,
            alignItems: 'center', backgroundColor: MyColors.userCardColor,
            borderColor: MyColors.usersBorderColor,
            shadowColor:MyColors.usersBorderColor,
            shadowOpacity:10,shadowRadius:Width*.02,
            borderRadius:Width*.05
        }}>
        <Text style={{
            fontWeight: 'bold', fontSize: Width * .05,
            textAlign: 'center', color: 'white'
        }}>name:{name}</Text>
        <Text style={{
            fontWeight: 'bold', fontSize: Width * .05,
            textAlign: 'center', color: 'white'
        }}>username:{username}</Text>
        <Text style={{
            fontWeight: 'bold', fontSize: Width * .05,
            textAlign: 'center', color: 'white'
        }}>email:{email}</Text>
        <Text style={{
            fontWeight: 'bold', fontSize: Width * .05,
            textAlign: 'center', color: 'white'
        }}>phone:{phone}</Text>
    </TouchableOpacity>
    )
}