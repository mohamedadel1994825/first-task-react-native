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
        style={styles.btnCard}>
        <Text style={styles.txtCard}>name:{name}</Text>
        <Text style={styles.txtCard}>username:{username}</Text>
        <Text style={styles.txtCard}>email:{email}</Text>
        <Text style={styles.txtCard}>phone:{phone}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnCard:{
        width: Width * .78,paddingTop:10,paddingBottom:10, justifyContent: 'space-around', marginTop: Width * .06,
        alignItems: 'center', backgroundColor: MyColors.userCardColor,
        borderColor: MyColors.usersBorderColor,
        shadowColor:MyColors.usersBorderColor,
        shadowOpacity:10,shadowRadius:Width*.02,
        borderRadius:Width*.05
    },
    txtCard:{
        fontSize: Width * .05,
            textAlign: 'center', color: 'white',marginBottom:3
    }
});