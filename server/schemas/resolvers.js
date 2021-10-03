const { Card } = require('../models');
const fetch = require("node-fetch")

const dummy = {
  playerClass: {$exists: true}   
}

const resolvers = {
 
  Query: {
<<<<<<< HEAD
    getClassCard: async (parent, {chosenClass}) => {
      
      const search = Card.find({playerClass: [chosenClass,'Neutral']})
=======
    getClassCard: async ( parent, {playerClass} ) => {
      const search = Card.find({playerClass: [playerClass,"Neutral"]})
      
>>>>>>> main
      return search
    },

  }
}
module.exports = resolvers;
