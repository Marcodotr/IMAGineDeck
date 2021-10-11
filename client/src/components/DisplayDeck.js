import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DECKS } from "../utils/queries";
import "semantic-ui-css/semantic.min.css";
import { useHistory } from "react-router-dom";
// import { ADD_CARD } from '../utils/mutations'
import cardBack from '../assets/unmodifiedCard.png'

function DisplayDeck() {
    const {data} = useQuery(QUERY_DECKS)

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
                <div className="Container"style={{position: "relative"}}>
                    <h4 style={{textAlign: "center"}}>{deck.hero}</h4>
                    <button  
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            marginLeft: "45%",
                            marginBottom: 20,
                            backgroundImage: `url(${cardBack})`,
                            width: 150,
                            height: 200,
                            backgroundSize:'contain',
                            backgroundRepeat:'no-repeat',
                            border: 'none',
                            marginTop:'25px',
                            backgroundColor:"white"
                        }} 
                        value={deck._id} 
                        onClick={thisDeck}
                    />
                </div>
            )
        } else {
            return <div></div>
        }
    })
    return(
        <div>
            { pageDecks }
        </div>
    )
}

export default DisplayDeck;