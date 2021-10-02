import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import CardBack from '../assets/CardBack.png'

const DividerExampleVerticalForm = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column textAlign='center'>
    
      <img style = {{marginLeft:'40px',width:'30vw', height:'90vh',minWidth:'400px' }} src={CardBack} alt = "">
      </img>
   
      </Grid.Column>

      <Grid.Column textAlign='center'>
     
        <img style = {{marginLeft:'40px', width:'30vw', height:'90vh', minWidth:'400px'}}src={CardBack} alt= "">
        </img>
      </Grid.Column>
    </Grid>


  </Segment>
)

export default DividerExampleVerticalForm