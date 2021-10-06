//this is probably the stinkiest code ive ever written - isack
import React from "react";
import { useState } from "react";
import CardDetail from "../components/CardDetail";
import { Grid,} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import demonHunter from '../assets/demonHunter.png'
import druid from '../assets/druid.png'
import hunter from '../assets/hunter.png'
import mage from '../assets/mage.png'
import paladin from '../assets/paladin.png'
import priest from '../assets/priest.png'
import rouge from '../assets/rouge.png'
import shaman from '../assets/shaman.png'
import warlock from '../assets/warlock.png'
import warrior from '../assets/warrior.png'

function HeroSelect(props) {
  const [playerClass, setPlayerClass] = useState("");

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

  function renderSwitch(param){
    switch(param){
      case 'Demon Hunter': return demonHunter;
      case 'Druid'       : return druid;
      case 'Hunter'      : return hunter;
      case 'Mage'        : return mage;
      case 'Paladin'     : return paladin;
      case 'Priest'      : return priest;
      case 'Rogue'       : return rouge;
      case 'Shaman'      : return shaman;
      case 'Warlock'     : return warlock;
      case 'Warrior'     : return warrior;

      default:
      return null;
    }

    

  }

  const heros = [
    "Demon Hunter",
    "Druid",
    "Hunter",
    "Mage",
    "Paladin",
    "Priest",
    "Rogue",
    "Shaman",
    "Warlock",
    "Warrior",
  ];
  const HeroButton = heros.map((hero) => (
    <Grid columns={3}>
      <Grid.Row centered>
        <button
          style = {{maxWidth: "15vw", overflow:"true", marginTop:"10px"}}
          name="playerClass"
          key={hero}
          onClick={handleHeroSelect}
          className="btn btn-secondary"
          type="submit"
          value={hero}
        >
          {hero}
        </button>
        </Grid.Row>
        <Grid.Row centered>
        <img src={renderSwitch(hero)}
        alt=""
        style={{width:'300px', height:'300px', justifyContent:'center'}}
        ></img>
        </Grid.Row>
    
      
      
    </Grid>
  ));

  return (
    <div>
      {playerClass === "" ? (
        <form>{HeroButton}</form>
      ) : (
        <div className="col-12 col-md-8 mb-3">
          <button
            name="playerClass"
            onClick={handleHeroClear}
            className="btn btn-primary"
            type="submit"
          >
            Clear Selection
          </button>
          <CardDetail
            playerClass={playerClass}
            title="Some Feed for Thought(s)..."
          />
        </div>
      )}
    </div>
  );
}

export default HeroSelect;
