import React from "react";
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

  const currDeck = []
  const filterTwo = (array, chosen) => {
    return array.filter( item => item === chosen).length
  }


  const heroCards = [];
  const neutralCards = [];

  for (let c = 0; c < theseCards.length; c++) {
    if (theseCards[c].playerClass === 'Neutral') {
      neutralCards.push(theseCards[c]);
    } else heroCards.push(theseCards[c])
  }

  const pageCards = heroCards.concat(neutralCards);

  const [currDeck, setCurrDeck] = useState([]);
  const filterTwo = (array, chosen) => {
    return array.filter(item => item.name === chosen.name).length
  }



  const addToDeck = (event) => {
    var card = JSON.parse(event.target.value)

    console.log(currDeck)
    
    if(card.rarity === "Legendary"){
      if(currDeck.includes(card)){
        alert('1')
      } else currDeck.push(card)
    }
    for(let i = 0; i<currDeck.length;i++){
      if(filterTwo(currDeck, card) <= 2){
        currDeck.push(card)
      }
      else alert('something')
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
  )}


export default CardDetail;