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

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
        }
    }

    onPressCancel = () => {
        Alert.alert('Login declined.')
        this.props.navigation.navigate('HomeRT')   
    }

    onPressLogin = () => {
        if (this.state.userName == '') {
            Alert.alert('Please enter user name.')
        }
        else if (this.state.password == '') {
            Alert.alert('Please enter your password.')
        }
        else {
            AsyncStorage.getItem('isUserLoggedIn', (err, result) => {
                console.log('result: ' + result)
                if (result !== 'none') {
                    Alert.alert('Someone already logged on.')
                    this.props.navigation.navigate('HomeRT')
                } else {
                    AsyncStorage.getItem(this.state.userName, (err, result) => {
                        if (result !== null) {
                            if (this.state.password !== result) {
                                Alert.alert('Password is incorrect. Please enter correct password.')
                            }
                            else {
                                AsyncStorage.setItem('isUserLoggedIn', this.state.userName, (err, result) => {
                                    Alert.alert(`${this.state.userName} logged in successfully.`)
                                    this.props.navigation.navigate('HomeRT')    
                                })
                            }
                        }
                        else {
                            Alert.alert(`${this.state.userName} do not exists.`)
                        }
                    })
        
                }
            })
        }
    }

    render() {
        return(
            <View style={styles.LoginContainer}>
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

                <View style={styles.buttonContainer}>
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={this.onPressLogin}
                        underlayColor={'#8bcbcb'}
                    >
                        <Text style={styles.buttonText}>Login</Text>
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
    LoginContainer: {
        flex: 1,
        paddingBottom: '50%',
        alignItems: 'center',
        paddingTop: '2%',
    },
    input: {
        flex: 1,
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
        flex: 2,
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