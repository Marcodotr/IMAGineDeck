import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";
import "semantic-ui-css/semantic.min.css";
import VisDeck from "./VisDeck";

function CardDetail(props) {
  console.log(props.playerClass)
  var searchCrit = props.playerClass
  console.log(`hello${searchCrit}`)
  const { loading, data } = useQuery(QUERY_CARDS, {
   variables: {playerClass: searchCrit}
  })

  const theseCards = data?.getClassCard || [];

  const [currDeck, setCurrDeck] = useState([]);
  const filterTwo = (array, chosen) => {
    return array.filter(item => item.name === chosen.name).length
  }


  const addToDeck = (event) => {
    var card = JSON.parse(event.target.value)

    if(card.rarity === "Legendary"){
      if(filterTwo(currDeck, card) <= 0){
        console.log(currDeck);
        console.log(card)
        console.log(filterTwo(currDeck, card))
        setCurrDeck(currDeck => [...currDeck, card])
      } else alert('something')
    } else if(filterTwo(currDeck, card) <= 1){
        console.log(currDeck);
        console.log(card)
        console.log(filterTwo(currDeck, card))
        setCurrDeck(currDeck => [...currDeck, card])
      } else alert('something')
    
    // console.log(currDeck)
  }
   

  return (
    <div>
      <div className="text-center ui grid">
        <div className="ui right sidebar vertical inverted menu overlay visible">
          <VisDeck 
            currDeck = {currDeck}
          />
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