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
    addDeck: async (parent, { title, cards }) => {
      return Deck.create({ title, cards })
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

// const { AuthenticationError } = require('apollo-server-express');
// const { User, Card, Deck } = require('../models');
// const { signToken } = require('../utils/auth');
// // const { Card } = require('../models');
// // const { Deck } = require('../models')
// const fetch = require("node-fetch")


// const resolvers = {
//   Query: {
//     users: async () => {
//       return User.find().populate('thoughts');
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username }).populate('thoughts');
//     },
//     thoughts: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Thought.find(params).sort({ createdAt: -1 });
//     },
//     thought: async (parent, { thoughtId }) => {
//       return Thought.findOne({ _id: thoughtId });
//     },
//     getClassCard: async ( parent, {playerClass} ) => {
//       const search = Card.find({playerClass: [playerClass,"Neutral"]})
      
//       return search
//     },
//   },

//   Mutation: {
//     addDeck: async (parent, { title, cards }) => {
//       return Deck.create({ title, cards })
//     },
    
//     addUser: async (parent, { username, email, password }) => {
//       const user = await User.create({ username, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('No user found with this email address');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     addThought: async (parent, { thoughtText, thoughtAuthor }) => {
//       const thought = await Thought.create({ thoughtText, thoughtAuthor });

//       await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         { $addToSet: { thoughts: thought._id } }
//       );

//       return thought;
//     },
//     addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
//       return Thought.findOneAndUpdate(
//         { _id: thoughtId },
//         {
//           $addToSet: { comments: { commentText, commentAuthor } },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeThought: async (parent, { thoughtId }) => {
//       return Thought.findOneAndDelete({ _id: thoughtId });
//     },
//     removeComment: async (parent, { thoughtId, commentId }) => {
//       return Thought.findOneAndUpdate(
//         { _id: thoughtId },
//         { $pull: { comments: { _id: commentId } } },
//         { new: true }
//       );
//     },
//   },
// };

// module.exports = resolvers;
