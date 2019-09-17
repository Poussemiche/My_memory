import React, { Component } from 'react';
import { Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'My Memory',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <Button
          style= {{ alignItems: 'center',
                    color: '#5AB9EA'}}
          title="Start a game"
          onPress={() => navigate('Game')}
        />
    );
  }
}

export default Home;
