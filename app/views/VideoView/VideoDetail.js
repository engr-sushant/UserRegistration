import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';

export class VideoDetail extends Component {
    render() {
        const videoId = this.props.navigation.getParam('youtubeId', 'No ID found')
        const videoUrl = `https://www.youtube.com/embed/${videoId}`
        return(
            <View style={{flex: 1}}>
                <WebView 
                    style={styles.webView}
                    javaScriptEnabled={true}
                    source={{uri: videoUrl}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        paddingTop: 5,
    }
})