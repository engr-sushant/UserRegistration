import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { YouTubeCellItem } from './YouTubeCellItem.js'

export class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDataLoaded: false,
        }
    }

    componentDidMount() {
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyBI6zH5VUKeSvRBYDECvu0dYAgGMnPLsDE')
        .then((response) => response.json())
        .then((repsonseData) => {
            this.setState({
                isDataLoaded: true,
                videos: Array.from(repsonseData.items),
            })
        })
        .catch((error) => {
            console.log('Error: ' + error)
        })
    }

    render() {
        const { navigate } = this.props.navigation
        return(
            <View>
                { this.state.isDataLoaded && (
                    <View style={styles.dataLoaded}>
                        <FlatList 
                            data={ this.state.videos }
                            renderItem={({item}) =>
                                <YouTubeCellItem 
                                    navigate={ navigate }
                                    id={item.id.videoId}
                                    title={item.snippet.title}
                                    image={item.snippet.thumbnails.high.url}
                                />
                            }
                        />
                    </View>
                )}

                { !this.state.isDataLoaded && (
                    <View style={styles.dataNotLoaded}>
                        <Text style={styles.laodingData}>Loading data...</Text>
                    </View>                    
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dataLoaded: {
    },
    dataNotLoaded: {
        alignSelf: 'center',
        marginTop: 20,
    },
    laodingData: {
        fontSize: 20,
    },
})