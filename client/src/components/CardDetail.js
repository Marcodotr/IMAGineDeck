import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";
import "semantic-ui-css/semantic.min.css";

function CardDetail(props) {
  console.log(props.playerClass)
  var searchCrit = props.playerClass
  console.log(`hello${searchCrit}`)
  const { loading, data } = useQuery(QUERY_CARDS, {
   variables: {playerClass: searchCrit}
  })

  const theseCards = data?.getClassCard || [];
  
  const [currDeck, setCurrDeck] = useState([]);
  
  const addToDeck = (event) => {
    
    var card = JSON.parse(event.target.value)
    
    if(card.rarity === "Legendary"){
      if(currDeck.some(deck => deck.name === card.name)){
        alert('max 1 unique Legendary')
        return
      } else {
        setCurrDeck(currDeck => [...currDeck, card]);
      }
    } else if(currDeck.some(deck => deck.name === card.name)){
        console.log('hello')
        var temp = currDeck
        temp.pop(card) 
        if(temp.some(deck => deck.name === card.name)){
          alert('max 2 unique cards')
          return;
        } else {
          setCurrDeck(currDeck => [...currDeck, card]);
        }
        setCurrDeck(currDeck => [...currDeck, card]);
      } else {
        setCurrDeck(currDeck => [...currDeck, card]);
      }
    
    console.log(currDeck)
    
  }
  
  const visDeck = currDeck.map((deck) => 
    <p style={{color: "white"}}>{deck.name}</p>
  )
  
  return (
    <div>
      <div className="text-center ui grid">
        <div className="ui right sidebar vertical inverted menu overlay visible">
          {visDeck}
        </div>
        {loading ? (
          <div>
            Loading
          </div>
        ) : (
          theseCards.map((card) => (
          <button
            onClick={addToDeck}
            key={card.name}
            className="four wide column"
            value={`{"name":"${card.name}", "img":"${card.img}", "rarity":"${card.rarity}"}`}
            style={{
              backgroundImage:`url(${card.img})`,
              width:200,
              height:450,
              backgroundSize:'contain',
              backgroundRepeat:'no-repeat'
            }}
          />
        )))}
      </div>
    </div>
  );
}

export default CardDetail;