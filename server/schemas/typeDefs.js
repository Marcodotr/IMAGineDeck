const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(thoughtId: ID!): Thought
  getClassCard(playerClass: String): [Card]!
}

type Card {
  cardId: String
  dbfId: String
  name: String!
  cardSet: String
  type: String
  faction: String
  rarity: String
  cost: Int
  attack: Int
  health: Int
  text: String
  flavor: String
  artist: String
  collectible: Boolean
  playerClass: String
  img: String
  locale: String
  mechanics:[Mechanics]
}
type Mechanics {
  name: String
}


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

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

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