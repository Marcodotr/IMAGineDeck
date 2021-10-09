import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DECK = gql`
  mutation addDeck($hero: String) {
    addDeck(hero: $hero) {
      _id
      hero
      cards{
        name
        img
        rarity
      }
    }
  }
`

export const ADD_CARD = gql`
  mutation addCard($_id: String, $name: String, $img: String, $rarity: String) {
    addCard(_id: $_id, name: $name, img: $img, rarity: $rarity) {
      _id
      cards{
        name
        img
        rarity
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
