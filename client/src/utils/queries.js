import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
{ 
    getClassCard {     
        name 
        img

    }
}

`