import React from "react";
import { useState } from "react";
import CardDetail from "../components/CardDetail";

function HeroSelect(props) {
  const [ chosenHero, setChosenHero] = useState("")

  const handleHeroSelect = (event) => {
    event.preventDefault();
    
    // console.log(event.target.value);
    setChosenHero(event.target.value);
  };

  const heros = ['Demon Hunter','Druid','Hunter','Mage','Palidin','Priest','Rogue','Shaman','Warlock','Warrior']
  const HeroButton = heros.map((hero) => 
  <button
    name="chosenHero"
    key={hero}
    onClick={handleHeroSelect}
    className='btn btn-primary'
    type="submit"
    value={hero}>
    {hero}   
  </button>
  )
    

  return (
    <div>
      {chosenHero === "" ? (
        <form>
            {HeroButton}
        </form>
      ) : (
        <div className="col-12 col-md-8 mb-3">
          <CardDetail
            chosenClass = {chosenHero}
            title="Some Feed for Thought(s)..."
          />
        </div>
      )}
    </div>
  );
}

export default HeroSelect;