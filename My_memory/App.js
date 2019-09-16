import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Game from './screens/Game';
import Home from './screens/Home';


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Game: {screen: Game},
});

const App = createAppContainer(MainNavigator);

export default App;
