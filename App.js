/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';

import { Video } from './app/views/VideoView/Video.js';
import { VideoDetail } from './app/views/VideoView/VideoDetail';

import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';

import { Quiz } from './app/views/Quiz.js';
import { QuizFinish } from './app/views/QuizFinish.js';

import { About } from './app/views/About.js';

const MyRouter = createStackNavigator({
  HomeRT: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
  ContactRT: {
    screen: Contact,
    navigationOptions: () => ({
      title: 'Contact',
    })
  },
  VideoRT: {
    screen: Video,
    navigationOptions: () => ({
      title: 'Videos'
    })
  },
  VideoDetailRT: {
    screen: VideoDetail,
    navigationOptions: () => ({
      title: 'Video detail'
    })
  },
  RegisterRT: {
    screen: Register,
    navigationOptions: () => ({
      title: 'User registration',
    })
  },
  LoginRT: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
    })
  },
  QuizRT: {
    screen: Quiz,
    navigationOptions: () => ({
      title: 'Quiz',
    })
  },
  AboutRT: {
    screen: About,
    navigationOptions: () => ({
      title: 'About',
    })
  },
  QuizFinishRT: {
    screen: QuizFinish,
    navigationOptions: () => ({
      title: 'Your score',
    })
  },
},
  {
    initialRouteName: 'HomeRT',
  }
)

const App = createAppContainer(MyRouter)
export default App;
