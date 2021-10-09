const { Card, Deck, User } = require('../models');
const fetch = require("node-fetch")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



const resolvers = {
 
  Query: {
    getClassCard: async ( parent, {playerClass} ) => {
      const search = Card.find({playerClass: [playerClass,"Neutral"]})
      
      return search
    }
  },

  Mutation: {
      addDeck: async (parent, {hero}) => {
        return Deck.create({hero: hero})
      },
      addCard: async (parent, {_id, name, img, rarity}) => {
        return Deck.findOneAndUpdate(
          {_id: _id},
          {
            $addToSet: { cards: {
              name: name,
              img: img,
              rarity: rarity
            }}
          },
          {
            new: true,
          }
        )
      },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
}

module.exports = resolvers;


