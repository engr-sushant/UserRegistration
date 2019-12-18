import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';

const about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const what = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export class About extends Component {
    render() {
        return(
            <ScrollView style={styles.container}>
                <Image 
                    style={styles.pic}
                    source={require('../sections/sectionImage/image1.png')}
                />
                <Text style={styles.title}>Who we are?</Text>
                <Text style={styles.subtitle}>{about}</Text>
                <View
                    style={styles.seprator}
                />
                
                <Image 
                    style={styles.pic}
                    source={require('../sections/sectionImage/image2.png')}
                />
                <Text style={styles.title}>What we do?</Text>
                <Text style={styles.subtitle}>{what}</Text>
                <View
                    style={styles.seprator}
                />

                <View style={styles.goBack}>
                    <Text onPress={()=> this.props.navigation.goBack()}>Go back</Text>
                </View>
                    
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 30,
        backgroundColor: '#ffffff',
    },
    pic: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 15,
    },
    seprator: {
        height: 3,
        backgroundColor: 'gray',
    },
    goBack: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
})
