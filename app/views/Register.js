import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Alert,
    AsyncStorage,
} from 'react-native';

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            rePassword: '',
        }
    }

    onPressCancel = () => {
        Alert.alert('User creation declined.')
        this.props.navigation.navigate('HomeRT')   
    }

    onPressRegister = () => {
        if (this.state.userName == '') {
            Alert.alert('Please enter user name.')
        }
        else if (this.state.password == '') {
            Alert.alert('Please enter your password.')
        }
        else if (this.state.password !== this.state.rePassword) {
            Alert.alert('Password do not match.')
        }
        else {
            AsyncStorage.getItem(this.state.userName, (err, result) => {
                if (result !== null) {
                    Alert.alert(`${this.state.userName} user name already exsists. Please try with some other user name.`)
                }
                else {
                    AsyncStorage.setItem(this.state.userName, this.state.password, (err, result) => {
                        Alert.alert(`${this.state.userName} registered successfully.`)
                        this.props.navigation.navigate('HomeRT')
                    })
                }
            })
        }
    }

    render() {
        return(
            <View style={styles.registerContainer}>
                <Text style={styles.lable}>Enter user name</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'User name'}
                    spellCheck={false}
                    onChangeText={(text) => this.setState({userName: text})}
                    value={this.state.userName}
                />

                <Text style={styles.lable}>Enter password</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    spellCheck={false}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password} 
                    secureTextEntry={true}                    
                />

                <Text style={styles.lable}>Retype password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder={'Retype password'}
                    spellCheck={false}
                    onChangeText={(text) => this.setState({rePassword: text})}
                    value={this.state.rePassword}        
                    secureTextEntry={true}             
                />

                <View style={styles.buttonContainer}>
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={this.onPressRegister}
                        underlayColor={'#8bcbcb'}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        style={styles.button}
                        onPress={this.onPressCancel}
                        underlayColor={'#8bcbcb'}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        paddingBottom: '40%',
        alignItems: 'center',
        paddingTop: '2%',
    },
    input: {
        flex: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#8bcbcb',
        width: '80%',
        fontSize: 20,
        marginBottom: 10,
    },
    lable: {
        width: '80%',
        marginTop: 15,
        fontSize: 20,
    },
    buttonContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },
    button: {
        width: '50%',
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#8bcbcb',
    },
})