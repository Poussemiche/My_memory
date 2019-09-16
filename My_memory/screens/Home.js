import React, { Component } from 'react';
import { Button } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'My Memory',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Start a game"
        onPress={() => navigate('Game')}
      />
    );
  }
}
