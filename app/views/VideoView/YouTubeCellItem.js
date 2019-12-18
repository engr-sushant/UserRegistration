import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

export class YouTubeCellItem extends Component {

    onPress = () => {
        this.props.navigate('VideoDetailRT', {'youtubeId': this.props.id});
    }

    render() {
        return(
            <View>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View>
                        <Image 
                            source={{uri: this.props.image}}
                            style={{width: '100%', height: 200, padding: 5}}
                        />
                        <Text style={styles.titleStyle}>
                            {this.props.title}
                        </Text>
                        <View style={styles.bottomStyle}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
    },
    bottomStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
})