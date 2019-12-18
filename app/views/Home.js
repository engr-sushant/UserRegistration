import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { Header } from '../sections/Header.js';
import { SectionTwo } from '../sections/SectionTwo.js';
import { Menu } from '../sections/Menu.js';
 
export class Home extends Component {

    render() {
        const { navigate } = this.props.navigation;
        const navigation = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header 
                    message = 'Press to Login' 
                    navigate = { navigate }
                    navigation = { navigation }
                />
                <SectionTwo />
                <Menu navigate = { navigate } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})