import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import React, { Component } from 'react'
export default class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            inputText: '',
            textSaved: '',
            isTextSaved:false
        };
    }
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        
        let headerTitle = 'Main',
        headerTintColor='darkviolet',
    headerTitleStyle = { color: 'darkviolet', marginLeft: Width * .2 },
        headerBackTitle = {color:'darkviolet'},
        // headerBackTitleStyle = { color: 'green', margin: 100 }
    headerStyle = {
        backgroundColor: MyColors.gray1, elevation: 0,
        shadowOpacity: 10,borderColor:'darkviolet',
    },
        headerRight = (<TouchableOpacity 
            activeOpacity={.9}
            style={{
            justifyContent: 'center', alignItems: 'center', marginRight: Width * .03,
            color: 'white', backgroundColor: 'darkviolet',
            width: Width * .2, height: Width * .1, borderRadius: Width * .02,
            elevation: 0,
            shadowOpacity: 0
        }}
                onPress={() => {
                    params.onSave()
                }}
            >
                <Text style={{ color: 'white' }}>
                    Save
                    </Text>
            </TouchableOpacity>)
        return { headerTintColor,headerTitle, headerTitleStyle, headerStyle, headerRight, headerBackTitle, }
    };
    onsave = () => {
        const { setParams } = this.props.navigation
        const { params } = this.props.navigation.state
        setParams({ isSaving: true })
        setTimeout(() => {
            setParams({ isSaving: false }),
            this.setState({isTextSaved:true})
        }, 200);
        
    }
    componentDidMount() {
        const { setParams } = this.props.navigation
        setParams({ onSave: this.onsave, isSaving: false })
    }
    onChangeText = (inputText) => {
        this.setState({ textSaved:inputText }),
        this.setState({isTextSaved:false})
    }
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { textSaved } = this.state
        let mainView = (params && params.isSaving) ? 
        <ActivityIndicator color={MyColors.blueWhite} /> : <View style={{
            flex: 1, justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: MyColors.blueWhite
        }} >
            {this.state.isTextSaved?<Text style={{
                fontWeight: 'bold', fontSize: Width * .07,
                textAlign: 'center', color:MyColors.gray1
            }}>{textSaved}</Text>:<Text></Text>}
            <TextInput
                placeholder='insert user name ...'
                style={{
                    width: Width * .85, height: Width * .12,
                    justifyContent: 'center', alignItems: 'center',
                    color: MyColors.greenColor1, 
                    fontSize: Width * .04, backgroundColor:MyColors.gray1,
                    shadowOpacity:0,
                }}
                onChangeText={this.onChangeText}
            />
            <TouchableOpacity style={{
                width: Width * .6, height: Width * .1,
                justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
                borderRadius: Width * .01, backgroundColor: 'darkviolet'
            }}
                onPress={() => {
                    navigate('Users')
                }}
            >
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .05,
                    textAlign: 'center', color: 'white'
                }}>navigate to users</Text>
            </TouchableOpacity>
        </View>
        return (
            mainView
        )
    }
}
