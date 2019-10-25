import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react'
import axios from 'axios';
import { User } from './User';
function userData({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default class DetailComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responsedata: []
        };
    }
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Detail',
            headereStyle = { backgroundColor: MyColors.greenColor1 },
            headerTintColor = 'blue',
            headerBackTitle = 'Back',
            headerBackTitleStyle = { color: 'green', margin: 100 }
        return { headerTitle, headereStyle, headerTintColor, headerBackTitle, headerBackTitleStyle }
    }
    componentDidMount() {
        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({ responsedata: response.data },
                console.log('users data is 1 ' + this.state.responsedata)
            )
            )
            .catch(err => console.error(err))
    }

    render() {
        const paramsRecievedFromMain = this.props.navigation.state.params
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: 1, justifyContent: 'space-around',
                alignItems: 'center', backgroundColor: MyColors.greenColor1
            }} >
                <View style={{ height: Width * .7, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={this.state.responsedata}
                        renderItem={({ item }) => 
                        <User 
                        name={item.name}
                        username={item.username}
                        email={item.email}
                        // address={item.address}
                        />
                    }
                        keyExtractor={item => item.id}
                    />
                    
                </View>
                <TouchableOpacity style={{
                    width: Width * .6, height: Width * .1,
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
                {console.log('users data is 3' + this.state.responsedata)}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});