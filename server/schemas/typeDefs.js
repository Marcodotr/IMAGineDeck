const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getClassCard(playerClass: String): [Card]!
  }
  
  type Deck {
    _id: ID
    title: String
    user: String
    cards: [Card]
  }

  type Card {
    cardId: String
    dbfId: String
    name: String!
    cardSet: String
    type: String
    faction: String
    rarity: String
    cost: Int
    attack: Int
    health: Int
    text: String
    flavor: String
    artist: String
    collectible: Boolean
    playerClass: String
    img: String
    locale: String
    mechanics:[Mechanics]
  }

  type Mechanics {
    name: String
  }
<<<<<<< HEAD
  type Mutation {
    addDeck(title: String!, cards: [Card]): Deck
=======

  input CardInput {
    name: String,
    img: String,
  }

  type Mutation {
    addDeck(
      title: String!, 
      cards: [CardInput]): [Deck]
>>>>>>> b2d71e972e9bef87c90b9a224654e182a1163468
  }
`;

module.exports = typeDefs;