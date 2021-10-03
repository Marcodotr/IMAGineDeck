import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
    query ($playerClass: String) {
        getClassCard(playerClass: $playerClass) {     
            name 
            img
            playerClass
        }
}
`