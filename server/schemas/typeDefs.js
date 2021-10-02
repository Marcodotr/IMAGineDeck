const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getClassCard: [Card]!
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

`;

module.exports = typeDefs;
