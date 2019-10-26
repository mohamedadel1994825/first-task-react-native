import { MyColors, Width, Height } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { User } from './User';
export default DetailComponent = (props) => {

    navigationOptions = ({ navigation }) => {
        let headerTitle = 'Detail',
            headereStyle = { backgroundColor: MyColors.greenColor1 },
            headerTintColor = 'blue',
            headerBackTitle = 'Back',
            headerBackTitleStyle = { color: 'green', margin: 100 }
        return { headerTitle, headereStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
    }

    const [usersdata, setUsersdata] = useState([]);
    useEffect(
        () => {
            getUsersdata();
            console.log('lets see fetched data')
        }, []
    );
    const getUsersdata = () => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => setUsersdata(response.data))
            .catch(err => console.error(err))
    }
    const paramsRecievedFromMain = props.navigation.state.params
    const { navigate } = props.navigation;
    // const [selected, setSelected] = React.useState(new Map());

    // const onSelect = React.useCallback(
    //     id => {
    //         const newSelected = new Map(selected);
    //         newSelected.set(id, !selected.get(id));
    //         setSelected(newSelected);
    //     },
    //     [selected],
    // );
    return (
        <View style={{
            flex: 1, justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: MyColors.greenColor1, width: Width
        }} >
            <View style={{ height: Width, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={usersdata}
                    extraData={usersdata}
                    renderItem={({ item, index }) =>
                        <User
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


const styles = StyleSheet.create({

});