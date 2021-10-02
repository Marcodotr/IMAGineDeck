import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
    query getClassCard {
        Card {
            name 
            img
        }
    }


`