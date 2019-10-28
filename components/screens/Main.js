import { MyColors, Width } from '../..';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react'
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputText: '',
            textSaved: '',
            isTextSaved: false
        };
    }
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state

        let headerTitle = 'Main',
            headerTintColor =[MyColors.darkviolet],
            headerTitleStyle =[styles.headerTitleStyle],
            headerBackTitle = [MyColors.darkviolet],
            headerStyle = [styles.headerStyle],
            headerRight = (<TouchableOpacity
                activeOpacity={.9}
                style={styles.headerRight}
                onPress={() => {
                    params.onSave()
                }}
            >
                <Text style={{ color: 'white' }}>
                    Save
                    </Text>
            </TouchableOpacity>)
        return {
            headerTintColor, headerTitle, headerTitleStyle,
            headerStyle, headerRight, headerBackTitle,
        }
    };
    onsave = () => {
        const { setParams } = this.props.navigation
        const { params } = this.props.navigation.state
        setParams({ isSaving: true })
        setTimeout(() => {
            setParams({ isSaving: false }),
                this.setState({ isTextSaved: true })
        }, 100);

    }
    componentDidMount() {
        const { setParams } = this.props.navigation
        setParams({ onSave: this.onsave, isSaving: false })
    }
    onChangeText = (inputText) => {
        this.setState({ textSaved: inputText }),
            this.setState({ isTextSaved: false })
    }
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { textSaved } = this.state
        let mainView = (params && params.isSaving) ?
            <ActivityIndicator color={MyColors.darkviolet} /> :
            <View style={styles.container} >
                {this.state.isTextSaved ?
                    <Text style={styles.textSaved}>{textSaved}</Text> : <Text></Text>}
                <TextInput
                    placeholder='insert user name ...'
                    style={styles.textInput}
                    onChangeText={this.onChangeText}
                />
                <TouchableOpacity
                    activeOpacity={.9}
                    style={styles.btnNav}
                    onPress={() => {
                        navigate('Users')
                    }}
                >
                    <Text style={{
                        fontSize: Width * .05,
                        textAlign: 'center', color: 'white'
                    }}>navigate to users</Text>
                </TouchableOpacity>
            </View>
        return (
            mainView
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-around',
        alignItems: 'center', backgroundColor: MyColors.blueWhite,
        width: Width, height: '100%'
    },
    headerRight: {
        justifyContent: 'center', alignItems: 'center', marginRight: Width * .03,
        color: 'white', backgroundColor:MyColors.darkviolet,
        width: Width * .2, height: Width * .1, borderRadius: Width * .02,
        elevation: 0,
        shadowOpacity: 0
    },
    headerStyle: {
        backgroundColor: MyColors.gray1, elevation: 0,
        shadowOpacity: 10, borderColor:MyColors.darkviolet,
    },
    headerTitleStyle:{color:MyColors.darkviolet, marginLeft: Width * .2 },
    container: {
        flex: 1, justifyContent: 'space-around',
        alignItems: 'center', backgroundColor: MyColors.blueWhite
    },
    textSaved: {
        fontSize: Width * .07,
        textAlign: 'center', color: MyColors.gray1
    },
    textInput: {
        width: Width * .85, height: Width * .12,
        justifyContent: 'center', alignItems: 'center',
        color: 'black',
        fontSize: Width * .04, backgroundColor: MyColors.gray1,
        shadowOpacity: 0,
    },
    btnNav: {
        width: Width * .6, height: Width * .1,
        justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
        borderRadius: Width * .01, backgroundColor: MyColors.darkviolet,
    }
});
