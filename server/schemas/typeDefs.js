const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

type Auth {
       token: ID!
       user: User
     }

  type Query {
    getClassCard(playerClass: String): [Card]!
    getDecks: [Deck]
    getDeck(_id: String!): Deck
  }
  
  type Deck {
    _id: ID
    title: String
    hero: String
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

  type Mutation {
    addDeck(hero: String): Deck      
    addCard(_id: String , name: String, img: String, rarity: String): Deck
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;


