import React, { useState } from "react";

import "semantic-ui-css/semantic.min.css";

function VisDeck(props) {

    const currentDeck = props.currDeck;

    console.log(currentDeck)
    const visiDeck = currentDeck.map((deck, index) => 
      <p key={deck.index} style={{color: "white"}}>{deck.name}</p>
    )

    return(
        <div>
            <h2 style={{marginTop:"30px", color: "white", position:'sticky'}}>My deck: {currentDeck.length}/30</h2>
        </div>
    )
}

export default VisDeck;