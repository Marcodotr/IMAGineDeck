import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
    query ($playerClass: String) {
        getClassCard(playerClass: $playerClass) {     
            name 
            img
            playerClass
            rarity
            cost
            attack
            health
        }
}
`

export const QUERY_DECKS = gql`
query getDecks {getDecks {
  _id
  hero
  cards{
    name
    img
    rarity
  }
}}
`

export const QUERY_SINGLE_DECK = gql`
query getDeck($_id: String!) {
  getDeck(_id: $_id) {
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;