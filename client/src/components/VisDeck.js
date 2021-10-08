<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
=======
import React from "react";
import { useMutation } from "@apollo/client";
>>>>>>> gerardo
import "semantic-ui-css/semantic.min.css";
import { ADD_DECK } from "../utils/mutations";

function VisDeck(props) {

    const currentDeck = props.currDeck;

    console.log(currentDeck)
    const visiDeck = currentDeck.map((deck, index) => 
      <p className={index} key={index} style={{color: "white"}}>{deck.name}</p>
    )

    const [saveDeck, {data, loading , error }] = useMutation(ADD_DECK);

    return(
        <div>
<<<<<<< HEAD
            <h2 style={{marginTop:"30px", color: "white", position:'sticky'}}>My deck: {currentDeck.length}/30</h2>

            {visiDeck}
            {currentDeck.length === 30 ? (
                <Button color='green'
                style={{minWidth:"90%"}}
                
                >Save Deck</Button>
            ) : (
                <div></div>
            )}

            
=======
            <div>
                <h4
                    style={{
                        color: 'white'
                    }}
                >{currentDeck.length}/30</h4>
            </div>
            <div>{visiDeck}</div>
            {currentDeck.length <= 30 ? (
                <div>
                    <form
                        onSubmit={e => {
                        e.preventDefault();
                        saveDeck({ variables: { title: 'thisDeck', cards: currentDeck} });
                        }}
                    >
                        <button type="submit">Add Deck</button>
                    </form>
                </div>
            ) : (
                <div></div>
            )});
>>>>>>> gerardo
        </div>
    )
}

export default VisDeck;