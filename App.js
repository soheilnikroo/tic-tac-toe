import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';

const navigator=createStackNavigator(
  {
    Main:MainScreen,
  },
  {
    intialRouteName: 'Main',
    defaultNavigationOptions:{
      title: 'Tic Tac Toe'
    }
  },
);

export default createAppContainer(navigator);