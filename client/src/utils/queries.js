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
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;