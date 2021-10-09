import React, { useState } from "react";
import { Button, Form, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

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
      </h2>

      {visiDeck}
      {currentDeck.length === 30 ? (
        <Form>
          <Form.Field>
          <Divider horizontal inverted> -</Divider>
              <h3 style={{color:'white'}}>Deck Title</h3>
            <input placeholder="Deck Title" />
          </Form.Field>
          <Button color="green" style={{ minWidth: "90%" }} type="submit">
            Save Deck
          </Button>
        </Form>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default VisDeck;
