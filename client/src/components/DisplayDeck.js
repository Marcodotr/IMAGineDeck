import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DECKS } from "../utils/queries";
import "semantic-ui-css/semantic.min.css";
import { Link, useHistory } from "react-router-dom";
// import { ADD_CARD } from '../utils/mutations'

function DisplayDeck() {
    const {loading, data} = useQuery(QUERY_DECKS)

    console.log(data)

    const theseDecks = data?.getDecks || [];
    const history = useHistory();

    const thisDeck = (event) => {
    
        history.push(`/singledeck/${event.target.value}`);

    }
    const pageDecks = theseDecks.map((deck) => {
        console.log(deck.cards.length)
        if (deck.cards.length === 30) {
            return (
                <div>
                    {deck.hero}
                    <button  
                        style={{
                            backgroundImg: '/unmodifiedCard.png',
                            height: 250,
                            width: 125
                        }} 
                        value={deck._id} 
                        onClick={thisDeck}
                    />
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