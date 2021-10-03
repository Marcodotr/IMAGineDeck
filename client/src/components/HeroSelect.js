import React from "react";
import { QUERY_CARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function Card(props) {
    const heros = ['Demon Hunter','Druid','Hunter','Mage','Palidin','Priest','Rogue','Shaman','Warlock','Warrior']
    const HeroButton = heros.map((hero) => 
    <button
            onClick={props.searchCards}
            className='btn btn-primary'
            type="submit"
            value={hero}>
            {hero}   
        </button>
    )
    

  return (
    <form>
        {HeroButton}
    </form>
  );
}

export default Card;