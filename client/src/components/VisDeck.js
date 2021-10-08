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
            {visiDeck}
        </div>
    )
}

export default VisDeck;