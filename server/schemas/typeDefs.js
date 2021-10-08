const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }
<<<<<<< HEAD

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
=======
  
  type Deck {
    _id: ID
    title: String
    user: String
    cards: [Card]
>>>>>>> b2d71e972e9bef87c90b9a224654e182a1163468
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

<<<<<<< HEAD
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
      commentAuthor: String!
    ): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;



// type Query {
//   getClassCard(playerClass: String): [Card]!
// }


// type Card {
//   cardId: String
//   dbfId: String
//   name: String!
//   cardSet: String
//   type: String
//   faction: String
//   rarity: String
//   cost: Int
//   attack: Int
//   health: Int
//   text: String
//   flavor: String
//   artist: String
//   collectible: Boolean
//   playerClass: String
//   img: String
//   locale: String
//   mechanics:[Mechanics]
// }

// type Mechanics {
//   name: String
// }
=======
  input CardInput {
    name: String,
    img: String,
  }

  type Mutation {
    addDeck(
      title: String!, 
      cards: [CardInput]): [Deck]
  }
`;

module.exports = typeDefs;
>>>>>>> b2d71e972e9bef87c90b9a224654e182a1163468
