import React, { Component } from 'react';
import { View } from 'react-native';

class Game extends Component {
  render() {
    return(
    <View style= {{ alignContent: 'stretch' }}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
    </View>
  );
  }
}

export default Game;
