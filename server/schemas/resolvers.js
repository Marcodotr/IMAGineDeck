const { Thought } = require('../models');
const fetch = require("node-fetch")

const resolvers = {
  // searchCard:{
  //   singleCard: (child) => {
  //     const promises = child.name.map(async (cardName) => {
  //       const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}/`);
  //       return response.json
  //     })
  //     return Promise.all(promises)
  //   }
  // },

  Query: {
    getCard: async (_,{hero}) => {
      const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${hero}/`)
      return response.json()
    },
  }
}
module.exports = resolvers;
