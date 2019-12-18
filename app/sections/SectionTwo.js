import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export class SectionTwo extends Component {
    render() {
        return(
            <Image 
                style={styles.homeLogo}
                source={require('./sectionImage/laptopImage.png')}
            />
        );
    }
}

const styles = StyleSheet.create({
    homeLogo: {
        flex: 3,
        height: undefined,
        width: undefined,
    },
})