import React from "react";
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

  const currDeck = []

  const addToDeck = (event) => {
    
    var card = JSON.parse(event.target.value)
    console.log(currDeck)
    
    if(card.rarity === "Legendary"){
      if(currDeck.includes(card)){
        alert('1')
      } else currDeck.push(card)
    }
    for(let i = 0; i<currDeck.length;i++){
      if(currDeck[i].name === card.name){
      console.log('hello')
      var temp = currDeck
      temp.pop(card) 
         if(temp.includes(card)){
        alert('max 2 unique cards')
      }else {
      currDeck.push(card)
      }
    } else {
      currDeck.push(card)
    }
    }
  }
   

  return (
    <div className="text-center ui grid">
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
        >
          
          {/* <img src={card.img} style={{width:200}} alt={card.name}/> */}
          
          </button>
      )))}
    </div>
  );
}

export default CardDetail;