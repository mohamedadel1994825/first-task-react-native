import { MyColors, Width } from '../..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUsersData, updateUsersData, setUserPressedData } from '../actions/usersActions';
import UserCard from '../UserCard';
class UserSelected extends Component {
    state = {
        userData: [''],
        data: []
    }
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'User Selected',
            headerStyle = [styles.headerStyle],
            headerTitleStyle = [styles.headerTitleStyle],
            headerTintColor = [MyColors.darkviolet],
            headerBackTitle = 'Back',
            headerBackTitleStyle = [styles.headerBackTitleStyle]
        return { headerTitle, headerStyle, headerTitleStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
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
            <View style={styles.container} >
                <View style={styles.content}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
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
)(UserSelected);

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: MyColors.gray1, elevation: 0,
        shadowOpacity: 10, borderColor: MyColors.darkviolet,
    }, headerTitleStyle: { color:MyColors.darkviolet, marginLeft: Width * .13 },
    headerBackTitleStyle: { margin: 100 },
    container: {
        flex: 1, justifyContent: 'space-around',
        alignItems: 'center', backgroundColor: MyColors.blueWhite, width: Width
    },
    content: { height: Width * .9, justifyContent: 'center', alignItems: 'center' },
    btnNav: {
        width: Width * .6, height: Width * .1, marginTop: Width * .1,
        justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
        borderRadius: Width * .01, backgroundColor: MyColors.darkviolet
    }
});