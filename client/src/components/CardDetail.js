import React from "react";

function CardDetail(props) {
  return (
    <div className="text-center">
      {/* <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /> */}
      <h3>CardName: {props.cardname}</h3>
    </div>
  );
}

export default CardDetail;