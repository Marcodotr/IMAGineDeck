import React from "react";
import { useState } from "react";
import CardDetail from "../components/CardDetail";

function HeroSelect(props) {
  const [ playerClass, setPlayerClass] = useState("")

  const handleHeroSelect = (event) => {
    event.preventDefault();
    
    // console.log(event.target.value);
    setPlayerClass(event.target.value);
  };
  
  const handleHeroClear = (event) => {
    event.preventDefault();
    
    // console.log(event.target.value);
    setPlayerClass("");
  };

  const heros = ['Demon Hunter','Druid','Hunter','Mage','Palidin','Priest','Rogue','Shaman','Warlock','Warrior']
  const HeroButton = heros.map((hero) => 
  <button
    name="playerClass"
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
      {playerClass === "" ? (
        <form>
            {HeroButton}
        </form>
      ) : (
        <div className="col-12 col-md-8 mb-3">
            <button
              name="playerClass"
              onClick={handleHeroClear}
              className='btn btn-primary'
              type="submit">
                 Clear Selection
            </button>
          <CardDetail
            playerClass = {playerClass}
            title="Some Feed for Thought(s)..."
          />
        </div>
      )}
    </div>
  );
}

export default HeroSelect;