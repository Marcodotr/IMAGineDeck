import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

function CardDetail(props) {
  console.log(props.playerClass)
  var searchCrit = props.playerClass
  console.log(`hello${searchCrit}`)
  const { loading, data } = useQuery(QUERY_CARDS, {
    options: (props) => ({ variables: { playerClass: props.playerClass } })
  })

  const theseCards = data?.getClassCard || [];

  return (
    <div className="text-center">Hello
      {loading ? (
        <div>
          Loading
        </div>
      ) : (
      theseCards.map((card) => (
        <div key={card.name} className='card mb-3'>
          <h4>{card.name}</h4>
          <img src={card.img} alt={card.name}/>
          </div>
      )))}
    </div>
  );
}

export default CardDetail;