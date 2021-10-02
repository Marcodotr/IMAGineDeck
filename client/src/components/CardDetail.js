import React from "react";

function CardDetail({cards}) {
  if(!cards.length) {
    return <h3>please select heto</h3>
  }


  return (
    <div className="text-center">
      {cards &&
      cards.map((card) => (
        <div key={card.name} className='card mb-3'>
          <h4>{card.name}</h4>
          </div>
      ))}
    </div>
  );
}

export default CardDetail;