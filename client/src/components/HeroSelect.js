import React from "react";

function Card(props) {
    const heros = ['Demon Hunter','Druid','Hunter','Mage','Palidin','Priest','Rogue','Shaman','Warlock','Warrior']
    const HeroButton = heros.map((hero) => 
    <button
            onClick={props.handleFormSubmit}
            className='btn btn-primary'
            type="submit"
            value='druid'>
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