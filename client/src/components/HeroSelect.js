//this is probably the stinkiest code ive ever written - isack
import React from "react";
import { useState } from "react";
import CardDetail from "../components/CardDetail";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import demonHunter from "../assets/demonHunter.png";
import druid from "../assets/druid.png";
import hunter from "../assets/hunter.png";
import mage from "../assets/mage.png";
import paladin from "../assets/paladin.png";
import priest from "../assets/priest.png";
import rouge from "../assets/rouge.png";
import shaman from "../assets/shaman.png";
import warlock from "../assets/warlock.png";
import warrior from "../assets/warrior.png";

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
  

  return (
    <div>
      {playerClass === "" ? (
        <form>
          <Grid columns="equal">
    
            <GridRow centered >
              <img
                src={paladin}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Paladin"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>

          
              <img
                src={mage}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Mage"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>

              <img
                src={hunter}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Hunter"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>
                <img
                src={druid}
                onClick={handleHeroSelect}
                type="submit"
                value="Druid"
                alt=""
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>
                <img
                src={demonHunter}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Demon Hunter"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>
            </GridRow>

            <GridRow centered >
              <img
                src={priest}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Priest"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>

              <img
                src={rouge}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Rogue"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>

              <img
                src={shaman}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Shaman"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>
                <img
                src={warlock}
                onClick={handleHeroSelect}
                type="submit"
                value="Warlock"
                alt=""
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>
                <img
                src={warrior}
                alt=""
                onClick={handleHeroSelect}
                type="submit"
                value="Warrior"
                style={{
                  marginTop:'40px',
                  maxWidth: "300px",
                  maxHeight: "260px",
                  justifyContent: "center",
                }}
              ></img>
            </GridRow>
          </Grid>
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
