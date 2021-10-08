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
    addDeck: async (parent, { title, cards }) => {
      return Deck.create({ title, cards })
    }
  }
}
module.exports = resolvers;