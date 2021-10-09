<<<<<<< HEAD
import React, { useState } from "react";
import { Button, Form, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
=======
import React from "react";
// import { useMutation } from "@apollo/client";
import "semantic-ui-css/semantic.min.css";
// import { ADD_DECK } from "../utils/mutations";
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9

function VisDeck(props) {
  const currentDeck = props.currDeck;

  console.log(currentDeck);
  const visiDeck = currentDeck.map((deck, index) => (
    <p key={deck.index} style={{ color: "white" }}>
      {deck.name}
    </p>
  ));

  return (
    <div>
      <h2 style={{ marginTop: "30px", color: "white", position: "sticky" }}>
        My deck: {currentDeck.length}/30
        <Divider horizontal inverted> -</Divider>
      </h2>

<<<<<<< HEAD
      {visiDeck}
      {currentDeck.length === 30 ? (
        <Form>
          <Form.Field>
          <Divider horizontal inverted> -</Divider>
              <h3 style={{color:'white'}}>Deck Title</h3>
            <input placeholder="Deck Title" />
          </Form.Field>
          <Button color="green" style={{ minWidth: "100%", marginBottom:"20px" }} type="submit">
            Save Deck
          </Button>
          <Divider horizontal inverted> -</Divider>
        </Form>
        
      ) : (
        <div></div>
      )}
    </div>
  );
}
=======
    // const [saveDeck, {data, loading , error }] = useMutation(ADD_DECK);

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
            {currentDeck.length <= 30 ? (
                <div>
                    {/* <form
                        onSubmit={e => {
                        e.preventDefault();
                        saveDeck({ variables: { title: 'thisDeck', cards: currentDeck} });
                        }}
                    >
                        <button type="submit">Add Deck</button>
                    </form> */}
                </div>
            ) : (
                <div></div>
            )});
        </div>
    )}
            
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9

export default VisDeck;
