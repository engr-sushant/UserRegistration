import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Alert,
} from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    onPressReset = () => this.setState({
        name: '',
        email: '',
        message: '',
    })

    onPressSend = () => {
        Alert.alert(this.state.name + ' your message is: ' + this.state.message)
        this.props.navigation.goBack()
    }

    render() {
        const { navigate } = this.props.navigation
        return(
            <View style={styles.contactContainer}>

                <Header 
                    message='Press to Login' 
                    navigate={navigate}
                    navigation={this.props.navigation}
                />

                <Text style={styles.heading}>Contact Us</Text>

                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.inputStyle}
                        placeholder={'Enter your name'}
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                        spellCheck={false}
                    />
                    <TextInput 
                        style={styles.inputMultiLine}
                        placeholder={'Enter your message'}
                        onChangeText={(text) => this.setState({message: text})}
                        value={this.state.message}
                        multiline={true}
                        numberOfLines={4}
                        spellCheck={false}
                    />
                    <TextInput 
                        style={styles.inputStyle}
                        placeholder={'Enter your email id'}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        spellCheck={false}
                    />
                    <TouchableHighlight 
                        onPress={this.onPressSend}
                        underlayColor={'green'}
                    >
                        <Text style={styles.buttonText}>Send Message</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        onPress={this.onPressReset}
                        underlayColor={'red'}
                    >
                        <Text style={styles.buttonText}>Reset Form</Text>
                    </TouchableHighlight>
                </View>   

            </View>
        );
    }
}

const styles = StyleSheet.create({
    contactContainer: {
        flex: 3,
        alignItems: 'center',
        paddingBottom: '30%',
    },
    heading: {
        flex: 0.5,
        fontSize: 20,
        paddingTop: 5,
    },
    formContainer: {
        flex: 3,
        width: '80%',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        marginTop: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#8BCBCB',
    },
    inputMultiLine: {
        flex: 2,
        fontSize: 20,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#8BCBCB',
    },
    buttonText: {
        margin: 10,
        fontSize: 20,
        alignSelf: 'center',
    },
})