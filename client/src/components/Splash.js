import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import mydecks from '../assets/mydecks.png'
import build from '../assets/build.png'

import { Link } from "react-router-dom";
const DividerExampleVerticalForm = () => (
  <Segment >
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column textAlign='center'>
    
    <Link to='/heroselect'>
      <img style = {{marginLeft:'40px',width:'30vw', height:'90vh',minWidth:'400px' }} src={build} alt = "">
      </img>
      </Link>
   
      </Grid.Column>

      <Grid.Column textAlign='center'>
     <Link to ='/saveddecks'>
        <img style = {{marginLeft:'40px', width:'30vw', height:'90vh', minWidth:'400px'}}src={mydecks} alt= "">
        </img>
        </Link>
      </Grid.Column>
    </Grid>


  </Segment>
)

export default DividerExampleVerticalForm