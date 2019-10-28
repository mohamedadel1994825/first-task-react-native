import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsersData, updateUsersData, setUserPressedData } from '../components/actions/usersActions';
import UserCard from './UserCard';
class ThirdComponent extends Component {
    state = {
        userData: [''],
        data: []
    }
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Selected User',
        headerStyle = {
            backgroundColor: MyColors.gray1, elevation: 0,
            shadowOpacity: 10,borderColor:'darkviolet',
        },
            headerTitleStyle = { color: 'darkviolet', marginLeft: Width * .13 },
            headerTintColor='darkviolet',
            headerBackTitle = 'Back',
            headerBackTitleStyle = { color: 'green', margin: 100 }
        return { headerTitle, headerStyle,headerTitleStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
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
                            <UserCard
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