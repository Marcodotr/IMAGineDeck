import React from "react";
import { useState } from "react";
import { useMutation } from '@apollo/client'
import CardDetail from "../components/CardDetail";
import { Grid, GridRow } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import {ADD_DECK} from '../utils/mutations'


function HeroSelect(props) {
  const [playerClass, setPlayerClass] = useState("");

  const [addDeck, {data, loading, error}] = useMutation(ADD_DECK)
  const handleHeroSelect = (event) => {
    event.preventDefault();
    
    console.log('yoyo' + event.target.value);
    setPlayerClass(event.target.value);
    
    addDeck({ variables: { hero: (event.target.value) } })
    
  };
  
  const handleHeroClear = (event) => {
    event.preventDefault();
    
    
    // console.log(event.target.value);
    setPlayerClass("");
  };

  
  const heros = [
    {
      "name": "Demon Hunter",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_demonhunter-0c117e1eb40c92f3156352ef3b07de82321bb8dc4ea6629445beef3722aa4c623257a803b71f511bdf8e3734586abf4f68eb5975708b4d2e76f27cbed8b38f72.png"
    },
    {
      "name": "Druid",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_druid-617a7e9ddd3ccb801cc5de8e8896ac2243d16dfe0063ee735e86b093bd8cec4d123bd5945b0bfe3150c968904b3dd2b3e8ec9337dce59e937dabbaa6692e716c.png"
    },
    {
      "name": "Hunter",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_hunter-704bdf9b2198c0ab867edd71df4cd5221c14d40199bac0ce43fdc90be9e0ed25178cecb2fbd795ff42478251db97903e63e365a6d446f3a9f12aea9093a6c575.png"
    },
    {
      "name": "Mage",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_mage-d1cbb187de507978f25cf95e54e357660819979baa01de215c0c1aa30964c2befa740cdff4ea812b29d81b1b5d89d8697c8e9ee3f47596671ba3f3e3e0f9e5dd.png"
    },
    {
      "name": "Paladin",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_paladin-f9de941bd0f39e204d4defeea0a0c1e626adfc3b4156324837adaa665d51cc45f1c97316aa654c165288d5facb624b341de9ca05e1ec5dd5b2cb17fa4de6cbee.png"
    },
    {
      "name": "Priest",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_priest-c7046e19996b87e2c6b6700b63565ee07c921ccce37fbe8b2e3b3913a95f04353e80a4118e9893dee29682e319b5ee893e07700476d7be5e16ed465dd8bca58d.png"
    },
    {
      "name": "Rogue",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_rogue-3f3a2a2dea07c21da713c9ff70dbba65df408fc7cd8bae41892000be39710a1d16770c5b3aa4b44521f83191ac5ca3308c1ba312ffc568b1c7a7e7e8ad47a9c7.png"
    },
    {
      "name": "Shaman",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_shaman-2b270028958eeb0dacc67ce4b4b8de9750391edb3fbe7fc33a11fb0c8a3cd70c0a0dcffc5b946f51cc63c1ba262efaa041893a01225591c75178579d13be16fb.png"
    },
    {
      "name": "Warlock",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_warlock-3db872b8621aac7750ee4f6b9a27509e5548a52d7b87f7c477515ad615863e7977a44179367378b93fa907983ae053184eeeda019f3a658adb0f5428c545a611.png"
    },
    {
      "name": "Warrior",
      "img": "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_warrior-e7f6b014158051c3b6f03af80448f5a312351594e0084d78c95f780eadbd897a9f7c7d828e278ea4bedaefe0addf1f99da43c2be4a63b4d659fd86427f61391f.png"
    },
  ];
  
  const heroButton = heros.map((hero) => 
    <button

      onClick={handleHeroSelect}
      key={hero.name}
      className="three wide column"
      value={hero.name}
      style={{
        backgroundImage:`url(${hero.img})`,
        width: 'auto',
        height: 200,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        border: 'none',
        marginTop:'25px',
        backgroundColor:"white"
      }}
      
    />
  )


  return (
    <div>
      {playerClass === "" ? (
        <form>
          <Grid columns="equal">
    
            <GridRow centered >
              {heroButton}
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
                className="ui negative basic button"
                type="submit"
              >
                Clear Selection
              </button>
              <CardDetail
                deckdata={data}
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