import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
    query thisClassCard($playerClass: String) {
        getClassCard(playerClass: $playerClass) {     
            name 
            img
            playerClass
        }
}
`