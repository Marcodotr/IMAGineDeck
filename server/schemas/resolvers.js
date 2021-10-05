const { Card } = require('../models');
const fetch = require("node-fetch")

const dummy = {
  playerClass: {$exists: true}   
}

const resolvers = {
 
  Query: {
    getClassCard: async ( parent, {playerClass} ) => {
      const search = Card.find({playerClass: [playerClass,"Neutral"]})
      
      return search
    },

  }
}
module.exports = resolvers;
