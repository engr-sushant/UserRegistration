import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    FlatList,
} from 'react-native';
import { QuizData } from '../sections/QuizSection/QuizData.js';
import { QuestionView } from '../sections/QuizSection/QuestionView.js';

export class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionLoaded: false,
            totalScore: 100,
            quizCompleted: false,
        }
    }

    componentDidMount() {
        const numOfQuestion = Array.from(QuizData.questions).length
        this.setState({
            questionList: Array.from(QuizData.questions),
            questionLoaded: true,
            totalQuestion: numOfQuestion,
            incorrect: 0,
            questionAnswered: 0,
        })
    }

    updateScore = (penalty) => {
        let tempScore = this.state.totalScore
        let missed = this.state.incorrect
        let questionTotal = this.state.totalQuestion
        let questionDone = this.state.questionAnswered

        let newScore = tempScore - penalty
        let totalAnswered = questionDone + 1
        let totalMissed = penalty ? missed + 1 : missed

        this.setState({
            totalScore: newScore,
            incorrect: totalMissed,
            questionAnswered: totalAnswered,
        })

        if (totalAnswered === questionTotal) {
            this.setState({
                quizCompleted: true
            })    
        }
    }

    finishQuiz = () => {
        this.props.navigation.navigate(
            'QuizFinishRT', {
                score: this.state.totalScore,
                missed: this.state.incorrect,
                questions: this.state.totalQuestion, 
            }
        )
    }

    render() {
        return(
            <View style={styles.container}>
                {this.state.questionLoaded && (
                    <FlatList
                        data={this.state.questionList}
                        renderItem={({item}) => 
                        <QuestionView
                            question={item.question}
                            answer1={item.answer1}
                            answer2={item.answer2}
                            answer3={item.answer3}
                            answer4={item.answer4}
                            correctAnswer={item.correctAnswer}
                            updateScore={this.updateScore}
                        />
                    }
                    />
                )}
                {!this.state.quizCompleted && (
                    <TouchableHighlight style={styles.disabled}>
                        <Text>Answer all the questions.</Text>
                    </TouchableHighlight>
                )}
                {this.state.quizCompleted && (
                    <TouchableHighlight style={styles.enabled} onPress={this.finishQuiz}>
                        <Text>Finish Quiz</Text>
                    </TouchableHighlight>
                )}
                {!this.state.questionLoaded && (
                    <Text>Loadin Quiz...</Text>
                )}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    disabled: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        backgroundColor: '#d3d3d3',
    },
    enabled: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        backgroundColor: '#90ee90',
    },
})