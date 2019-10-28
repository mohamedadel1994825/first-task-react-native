import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,AsyncStorage } from 'react-native';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsersData, updateUsersData } from '../components/actions/usersActions';
class User extends Component {
    setUsers = async () => {
        try {
            let usersdataObj = this.props.updatedUsersData
            await AsyncStorage.setItem('usersdataObj',
                JSON.stringify(usersdataObj));
        } catch (error) {
        }
    }
    getUsers = async (id) => {
        await AsyncStorage.getItem('usersdataObj')
            .then((response) => {
                return JSON.parse(response);
            })
            .then((parsedResponse) => {
                let datasource = parsedResponse.filter(function (user) {
                    return user.id !== id;
                }
                );
                this.props.setUsersData(datasource)
                let singledatasource = parsedResponse.filter(function (user) {
                    return user.id === id;
                }
                );
                AsyncStorage.setItem('singledatasource',
                    JSON.stringify(singledatasource));
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
            });
    }
    render() {
        let { id, name, username, email, phone } = this.props
        let userCard = <TouchableOpacity
            onPress={
                () => {
                    this.setUsers(),
                        this.getUsers(id)
                }
            }
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
            userCard
        )
    }
}

const mapStateToProps = state => ({
    usersData: state.users.usersData,
    updatedUsersData: state.users.updatedUsersData
});
export default connect(
    mapStateToProps,
    { setUsersData, updateUsersData }
)(User);
const styles = StyleSheet.create({
});