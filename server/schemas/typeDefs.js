const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getCard(name: String!): singleCard
  }



  type singleCard {
    cardId: String!
    name: String
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
    elite: Boolean
    race: String
    img: String
    imgGold: String
  }
`;

module.exports = typeDefs;
