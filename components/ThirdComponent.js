import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,AsyncStorage } from 'react-native';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsersData, updateUsersData,setUserPressedData  } from '../components/actions/usersActions';
class ThirdComponent extends Component {
    state = {
        userData: [''],
        data: []
    }
    componentDidMount() {
        this.addUser()
    }
    addUser() {
        AsyncStorage.getItem('singledatasource')
            .then((response) => {
                return JSON.parse(response);
            })
            .then((parsedResponse) => {
                this.props.setUserPressedData(parsedResponse)
            });
    }
    render() {
        let datasource = this.props.userPressedData
        let User = ({ id, name, username, email, phone }) =>
            <TouchableOpacity
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
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.blueWhite, width: Width
            }} >
                <View style={{ height: Width * .9, justifyContent: 'center', alignItems: 'center' }}>
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
                        keyExtractor={({ item, index }) => index + ''}
                    />

                </View>

            </View>

        )
    }
}
const mapStateToProps = state => ({
    usersData: state.users.usersData,
    updatedUsersData: state.users.updatedUsersData,
    userPressedData: state.users.userPressedData
});
export default connect(
    mapStateToProps,
    { setUsersData, updateUsersData, setUserPressedData }
)(ThirdComponent);

const styles = StyleSheet.create({

});