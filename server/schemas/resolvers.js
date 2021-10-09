const { Card } = require('../models');
const { Deck } = require('../models')
const fetch = require("node-fetch")


const resolvers = {
 
  Query: {
    getClassCard: async ( parent, {playerClass} ) => {
      const search = Card.find({playerClass: [playerClass,"Neutral"]})
      
      return search
    },

  },

  Mutation: {
    addDeck: async (parent, {hero}) => {
      return Deck.create({hero: hero})
    },
    // addCard: async (parent, {card}) => {
    //   return Deck.update()
    // }
  }
}
module.exports = resolvers;