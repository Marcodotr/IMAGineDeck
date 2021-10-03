const { Card } = require('../models');
const fetch = require("node-fetch")

const dummy = {
  playerClass: {$exists: true}   
}

const resolvers = {
 
  Query: {
    getClassCard: async ( parent, {chosenClass} ) => {

      const search = Card.find({playerClass: [chosenClass,'Neutral']})
      
      return search
    }

  }
}
module.exports = resolvers;
