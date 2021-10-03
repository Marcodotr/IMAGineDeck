import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "../utils/queries";

function CardDetail(props) {
  console.log(props.chosenClass)
  const { loading, data } = useQuery(QUERY_CARDS, {
    variables: { chosenClass: props.chosenClass },
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
          </div>
      )))}
    </div>
  );
}

export default CardDetail;