import React from 'react'
import{StyleSheet,View,Text} from 'react-native'
const Nav=(props)=>{
    return(
    <View style={styles.nav}>
        <Text>{props.name}</Text>
    </View>
    )
}
const styles=StyleSheet.create({
    nav:{
        backgroundColor:'green',
        alignItems:'center',
        padding:10,
        marginTop :0,
    width:'100%'
    }
})
export default Nav;