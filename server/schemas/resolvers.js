const { Card } = require('../models');
const fetch = require("node-fetch")

const dummy = {
  playerClass: {$exists: true}   
}

const resolvers = {

  
  // peramsSearch: (params) => {
  //   const curParams = []
  //   if(params.name)
  //     const promises = .name.map(async (cardName) => {
  //       const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}/`);
  //       return response.json
  //     })
  //     return Promise.all(promises)

  // },

  
  Query: {
    getClassCard: async (parent, {chosenClass}) => {
      
      const search = Card.find({playerClass: [chosenClass,'Neutral']})
      return search
    },
    // getFilter: async (parent, {filters}) => {
    //   const filterSearch = Card.find({})


    // }


  }
}
module.exports = resolvers;
