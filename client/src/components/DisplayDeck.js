import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DECKS } from "../utils/queries";
import "semantic-ui-css/semantic.min.css";
// import { ADD_CARD } from '../utils/mutations'

function DisplayDeck() {
    const {loading, data} = useQuery(QUERY_DECKS)

    console.log(data)

    const theseDecks = data?.getDecks || [];

    const pageDecks = theseDecks.map((deck) => {
        console.log(deck.cards.length)
        if (deck.cards.length === 30) {
            return (
                <div>
                    {deck.hero}
                    <img src='/unmodifiedCard.png' style={{height: 250}}></img>
                </div>
            )
        }
    })
    return(
        <div>
            <h1>Hello</h1>
            { pageDecks }
        </div>
    )
}

export default DisplayDeck;