import React from "react";
import { QUERY_CARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import CardDetail from "../components/CardDetail";
import Container from "../components/Container";

function Card(props) {
  const { loading, data } = useQuery(QUERY_CARDS);
  const searchedCards = data || [];
  console.log(searchedCards)

    const heros = ['Demon Hunter','Druid','Hunter','Mage','Palidin','Priest','Rogue','Shaman','Warlock','Warrior']
    const HeroButton = heros.map((hero) => 
    <button
      key={hero}
      onClick={props.searchCards}
      className='btn btn-primary'
      type="submit"
      value={hero}>
      {hero}   
    </button>
    )
    

  return (
    <div>

      <form>
          {HeroButton}
      </form>

      <div className="col-12 col-md-8 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardDetail
          cards={data}
          title="Some Feed for Thought(s)..."
        />
      )}
      </div>

    </div>
  );
}

export default Card;