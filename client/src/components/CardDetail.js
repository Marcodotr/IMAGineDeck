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
  // const uniquecards = [...new Set(theseCards.name)]
  console.log(theseCards)
  return (
    <div className="text-center ui grid">
      {loading ? (
        <div>
          Loading
        </div>
      ) : (
        theseCards.map((card) => (
        <div key={card.name} className="four wide column">
          <h4>{card.name}</h4>
          <img src={card.img} style={{width:200}} alt={card.name}/>
          </div>
      )))}
    </div>
  );
}

export default CardDetail;