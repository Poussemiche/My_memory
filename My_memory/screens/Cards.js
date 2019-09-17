import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet, Image } from 'react-native';

class Cards extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const CardImg = require('../assets/block.png');

        if (this.props.is_open) {
            CardImg = this.props.img;
          }

        return(
            <View style={styles.container}>
                 <TouchableHighlight
                 onPress={ this.props.clickCard }
                 activeOpacity
                 underlayColor={ '#84CEEB' }>
                    <Image source={ CardImg } />
                 </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    }
  });

export default Cards;