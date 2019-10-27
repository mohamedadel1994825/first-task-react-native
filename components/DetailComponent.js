import { MyColors, Width, Height } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersData, updateUsersData  } from '../components/actions/usersActions';
import { User } from './User';
   DetailComponent = (props) => {
    navigationOptions = ({ navigation }) => {
        let headerTitle = 'Detail',
            headereStyle = { backgroundColor: MyColors.greenColor1 },
            headerTintColor = 'blue',
            headerBackTitle = 'Back',
            headerBackTitleStyle = { color: 'green', margin: 100 }
        return { headerTitle, headereStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
    }

    const [usersdata, setStateUsersdata] = useState([]);
    useEffect(
        () => {
            getUsersdata();
            console.log('lets see fetched data')
        }, []
    );
    const getUsersdata = () => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => props.setUsersData(response.data))
            .catch(err => console.error(err))
    }
    props.updateUsersData(props.usersData)
    let datasource=props.updatedUsersData
    // setStateUsersdata(data)
    const paramsRecievedFromMain = props.navigation.state.params
    const { navigate } = props.navigation;
    return (
        <View style={{
            flex: 1, justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: MyColors.greenColor1, width: Width
        }} >
            <View style={{ height: Width, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={datasource}
                    extraData={datasource}
                    renderItem={({ item, index }) =>
                        <User
                            id={item.id}
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            phone={item.phone}
                        />
                    }
                    keyExtractor={item => item.id}
                />

            </View>
            <TouchableOpacity style={{
                width: Width * .6, height: Width * .1, marginTop: Width * .1,
                justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
                borderRadius: Width * .01, backgroundColor: 'darkviolet'
            }}
                onPress={() => {
                    navigate('ThirdScreen')
                }}
            >
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .05,
                    textAlign: 'center', color: 'white'
                }}>navigate to ThirdScreen</Text>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = state => ({
    usersData: state.users.usersData,
    updatedUsersData:state.users.updatedUsersData
  });
  export default connect(
    mapStateToProps,
    { setUsersData, updateUsersData }
  )(DetailComponent);

const styles = StyleSheet.create({

});