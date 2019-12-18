import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Alert,
} from 'react-native';
 
export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isUserLoggedIn: false,
            loggedInUser: false,
        }
    }

    toggleUser = () => {
        if (this.state.isUserLoggedIn) {
            AsyncStorage.setItem('isUserLoggedIn', 'none', (err, result) => {
                this.setState({
                    isUserLoggedIn: false,
                    loggedInUser: false,
                })
                Alert.alert('User logged out.')
            })
        }
        else {
            this.props.navigate('LoginRT')
        }
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            AsyncStorage.getItem('isUserLoggedIn', (err, result) => {
                if (result === 'none') {
                    console.log('NONE logged in')
                }
                else if (result === null) {
                    AsyncStorage.setItem('isUserLoggedIn', 'none', (err, result) => {
                        console.log('None set to logged in')
                    })
                } else {
                    this.setState({
                        isUserLoggedIn: true,
                        loggedInUser: result,
                    })
                }
            })    
        });      
    }

    componentWillUnmount() {
        this._navListener.remove()
    }

    render() {
        var currentUser = this.state.isUserLoggedIn ? this.state.loggedInUser : this.props.message
        return(
            <View style={styles.headerView}>
                <Image 
                    source={ require('./sectionImage/logo.png') }
                    style={styles.imageLogo}
                />
                <Text 
                    style={styles.headerText}
                    onPress={ this.toggleUser }
                >
                    { currentUser }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#8BCBCB',
        justifyContent: 'center',
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        flexDirection: 'row',
    },
    headerText: {
        flex: 5.5,
        color: '#000000',
        fontSize: 20,
        textAlign: 'right',
        marginRight: 10,
        alignSelf: 'center',
    },
    imageLogo: {
        marginLeft: 20,
        flex: 2,
        width: undefined,
        height: undefined,
    }
})