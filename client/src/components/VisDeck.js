import React, { useState } from "react";

import "semantic-ui-css/semantic.min.css";

function VisDeck(props) {

    const currentDeck = props.currDeck;

    console.log(currentDeck)
    const visiDeck = currentDeck.map((deck, index) => 
      <p className={index} key={index} style={{color: "white"}}>{deck.name}</p>
    )

    return(
        <div>
            <div>
                <h4
                    style={{
                        color: 'white'
                    }}
                >{currentDeck.length}/30</h4>
            </div>
            <div>{visiDeck}</div>
            {currentDeck.length === 30 ? (
                <button>Save Deck</button>
            ) : (
                <div></div>
            )});
        </div>
    )
}

export default VisDeck;