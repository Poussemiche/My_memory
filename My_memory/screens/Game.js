import React, { Component } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import Cards from './Cards';
import data_cards from '../data/dataCards';

class Game extends Component {
  state = {
    cardSelection: [],
    cardIsPairs: [],
  };

  constructor(props) {
    super(props);
    //console.log(data_cards);  Contenu d'img se transforme en int
    let clone = JSON.parse(JSON.stringify(data_cards));
    //console.log(clone);
    this.cards = data_cards.concat(clone);
    //console.log(this.cards);
    let i = 0;

    this.cards.map((obj, index) => {
      let id = i + 1;
      obj.id = id;
      obj.img = this.cards[i]; //Problem
      obj.is_open = false;
    });

    this.cards = shuffle(this.cards);
  }

  componentDidMount() {
    this.setState({
      cards: this.cards
    });
  }

  render() {
    let contents = this.state.cards;

    return (
      <SafeAreaView style={ styles.card }>
        <FlatList
          data={ contents }
          renderItem={ this.renderCard }
          numColumns={ 4 }
          keyExtractor={ item => item.id }
        />
      </SafeAreaView>
    );
  }
}

renderCard = ({ item }) => {
  return (
    <Card
      id={ item.id }
      img={ item.img }
      is_open={ item.is_open }
    />
  );
};



function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let idx;

  while (ctr > 0) {
      idx = Math.floor(Math.random() * ctr);
      ctr--;

      temp = arra1[ctr];
      arra1[ctr] = arra1[idx];
      arra1[idx] = temp;
  }
  return arra1;
}

//STYLE
const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default Game;

clickCard = id => {
  let cardIsPair = [...this.state.cardIsPair];
  let cardSelection = this.state.cardSelection;

  let idx = this.state.cards.findIndex(card => {
    return card.id == id;
  });

  let cards = [...this.state.cards];

  if (
    cards[idx].is_open == false &&
    cardIsPair.indexOf(cards[idx].name) === -1
  ) {
    cards[idx].is_open = true;

    cardSelection.push({
      idx: idx,
      name: cards[idx].name
    });

    if (cardSelection.length == 2) {
      if (cardSelection[0].name == cardSelection[1].name) {
        cardIsPair.push(cards[idx].name);
      } else {
        cards[cardSelection[0].idx].is_open = false;

        setTimeout(() => {
          cards[idx].is_open = false;
          this.setState({
            cards: cards
          });
        }, 500);
      }

      cardSelection = [];
    }

    this.setState({
      cards: cards,
      cardSelection: cardSelection
    });
  }
};
