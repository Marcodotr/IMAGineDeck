import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
{ 
    getClassCard(chosenClass: String) {     
        name 
        img
        playerC
    }
}

`