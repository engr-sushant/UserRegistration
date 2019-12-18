import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    FlatList,
} from 'react-native';

export class QuizFinish extends Component {
    finishQuiz = () => {
        this.props.navigation.navigate('HomeRT')
    }

    render() {
        const userScore = this.props.navigation.getParam('score', 'Error - No score returned')
        const questionMissed = this.props.navigation.getParam('missed', 'Error - No question missed.')
        const totalQuestion = this.props.navigation.getParam('questions', 'Error - No question returned.')

        return(
            <View style={styles.container}>

                <Text>Your quiz score was {userScore}.</Text>
                <Text>You missed on {questionMissed} out of {totalQuestion} questions.</Text>

                <TouchableHighlight onPress={this.finishQuiz} style={styles.button}>
                    <Text>Exit Quiz</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
    },
})