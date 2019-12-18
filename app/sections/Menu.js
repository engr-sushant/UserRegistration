import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TouchableOpacity,
} from 'react-native';

export class Menu extends Component {
    onPress = () => {
        Alert.alert('You have pressed a button.')
    }

    render() {
        return(
            <View style={styles.menuContainer}>
                <View style={styles.rowButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() =>  this.props.navigate('VideoRT')}
                    >
                        <Text style={styles.buttonText}>Videos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() => this.props.navigate('RegisterRT')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={ this.onPress }
                    >
                        <Text style={styles.buttonText}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() => this.props.navigate('ContactRT')}
                    >
                        <Text style={styles.buttonText}>Contact</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowButtonContainer}>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() => this.props.navigate('QuizRT')}
                    >
                        <Text style={styles.buttonText}>Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=> this.props.navigate('AboutRT')}
                    >
                        <Text style={styles.buttonText}>About</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 3,
        backgroundColor: '#8BCBCB',
    },
    rowButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8BCBCB',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
    },
    buttonStyle: {
        flex: 2,
        width: undefined,
        height: undefined,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 20,
    },
})