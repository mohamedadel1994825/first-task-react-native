import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage, } from 'react-native';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsersData, updateUsersData } from '../components/actions/usersActions';
class User extends Component {
    setUsers = async () => {
        let usersdataObj = this.props.updatedUsersData
        await AsyncStorage.setItem('usersdataObj',
            JSON.stringify(usersdataObj));

    }
    getUsers = async (id) => {
        AsyncStorage.getItem('usersdataObj')
            .then((response) => {
                return JSON.parse(response);
            })
            .then((parsedResponse) => {
                // this.setState({data:parsedResponse})
                // this.setState(prevState => ({
                //     userData: [parsedResponse,...prevState.userData,parsedResponse]
                //   }))
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
            })
    }

    // componentDidUpdate(){
    //     this.updateUser
    // }
    //    updateUsersAfterPressed = (id) => {
    //     let datasource =  this.props.usersData.filter(function(user) {
    //         return user.id!==id;
    //     });
    //     this.props.setUsersData(datasource)

    // }
    render() {
        let { id, name, username, email, phone } = this.props
        // const appUserId = ["id", id]
        // const appName = ["name", name]
        // const appUsername = ["username", username]
        // const appUseremail = ["email", email]
        // const appUserphone = ["phone", phone]
        // addUser = async () => {
        //     let userdataObject = {
        //         appUserId,
        //         appName,
        //         appUsername,
        //         appUseremail,
        //         appUserphone,

        //     }

        //    updateUsersAfterPressed = () => {
        //         let datasource =  this.props.updatedUsersData.filter(function(user) {
        //             return user.id!=this.props.id;
        //         });
        //         this.props.updateUsersData(datasource)

        //     }
        // setUsersToStorage = async () => {
        //     let datasource =  props.updatedUsersData.filter(function(user) {
        //         return user.id !== id;
        //     });
        //     let usersdataObj=props.updatedUsersData
        //     await AsyncStorage.setItem('usersdataObj',
        //         JSON.stringify(usersdataObj));
        // }
        let userCard = <TouchableOpacity
            onPress={
                // addUser(),
                //    this.updateUsersAfterPressed(id)
                // setIsselected(false)
                () => {
                    this.setUsers,
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