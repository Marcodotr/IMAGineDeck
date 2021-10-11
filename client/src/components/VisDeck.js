import React from "react";
import { Button, Form, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// import { useMutation } from "@apollo/client";

function VisDeck(props) {
  const currentDeck = props.currDeck;

  // const [deleteCard, {error}] = useMutation(DELETE_CARD);

  const deleteFromDeck = (event) => {
    const thisCard = event.target.className;
    
    
  }

  const visiDeck = currentDeck.map((deck, index) => (
    <p key={index} className={index} style={{ color: "white" }} defaultValue={index} onClick={deleteFromDeck}>
      {deck.name}
    </p>
  ));

  return (
    <div>
      <h2 style={{ marginTop: "30px", color: "white", position: "sticky" }}>
        My deck: {currentDeck.length}/30
        <Divider horizontal inverted> -</Divider>
      </h2>

      <div>
        {visiDeck}
      </div>
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

export default VisDeck;

