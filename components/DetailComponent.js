import { MyColors, Width, Height } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersData, updateUsersData  } from '../components/actions/usersActions';
import  User  from './User';
class DetailComponent extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            data:[]
        };
      }
   static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Users',
        headerStyle = {
            backgroundColor: MyColors.gray1, elevation: 0,
            shadowOpacity: 10,borderColor:'darkviolet',
        },
            headerTitleStyle = { color: 'darkviolet', marginLeft: Width * .23 },
            headerTintColor='darkviolet',
            headerBackTitle = 'Back',
            headerBackTitleStyle = { color: 'green', margin: 100 }
        return { headerTitle, headerStyle,headerTitleStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
    }
    getUsersdata = () => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => this.props.setUsersData(response.data))
            .catch(err => console.error(err))
    }
    componentDidMount(){
            this.getUsersdata();
            console.log('lets see fetched data')
    }
    render(){
        this.props.updateUsersData(this.props.usersData)
        let datasource=this.props.updatedUsersData
        const paramsRecievedFromMain = this.props.navigation.state.params
        const { navigate } =this.props.navigation;
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.blueWhite, width: Width
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
                        navigate('UserSelected')
                    }} >
                    <Text style={{
                        fontWeight: 'bold', fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>navigate to selected user</Text>
                </TouchableOpacity>
            </View>
        )
    }
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