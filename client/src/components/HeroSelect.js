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

  const heros = ['Demon Hunter','Druid','Hunter','Mage','Paladin','Priest','Rogue','Shaman','Warlock','Warrior']
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
        <Grid columns={3} divided>
          <Grid.Row centered>
            <div className="col-12 col-md-8 mb-3">
              <button
                style={{
                  maxWidth: "15vw",
                  minWidth: "15vw",
                  overflow: "true",
                  marginTop: "20px",
                }}
                name="playerClass"
                onClick={handleHeroClear}
                class="ui negative basic button"
                type="submit"
              >
                Clear Selection
              </button>
              <CardDetail
                playerClass={playerClass}
                title="Some Feed for Thought(s)..."
              />
            </div>
          </Grid.Row>
        </Grid>
      )}
    </div>
  );
}

export default HeroSelect;