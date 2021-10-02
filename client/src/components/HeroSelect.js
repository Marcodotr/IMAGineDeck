import React from "react";
import { QUERY_CARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";

import CardDetails from './CardDetail'
function HeroSelect(props) {
    const heros = ['Demon Hunter','Druid','Hunter','Mage','Palidin','Priest','Rogue','Shaman','Warlock','Warrior']
    const HeroButton = heros.map((hero) => 
    <button
            key={hero}
            onClick={props.data}
            className='btn btn-primary'
            type="submit"
            value={hero}>
            {hero}   
        </button>
    )
    function getdata() {
    const {loading, error, data} = useQuery(QUERY_CARDS)
    if (error) return 'hi'
    if(loading) return 'hi'
    return (
      <CardDetails/>
    )
    }
  return (
    <form>
        {HeroButton}
    </form>
  );
}

export default HeroSelect;