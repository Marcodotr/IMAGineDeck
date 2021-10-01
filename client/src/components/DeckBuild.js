import React, { Component } from 'react';
import API from '../utils/API';
import HeroSelect from './HeroSelect'
import CardDetail from './CardDetail'
import Container from './Container';

class DeckBuild extends Component{
    state = {
        result:{},
        search:""
    }

    SrchAvailCrds = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .then(console.log(this.state.result))
        .catch(err => console.log(err))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.SrchAvailCrds('neutral')
    }



      handleInputChange = event => {
          const value = event.target.value;
          const name = event.target.name;
          this.setState({
              [name]: value
          })
      }

    render() {
        return (
            <Container>
            <HeroSelect
            value={this.state.search}
            handleFormSubmit={this.handleFormSubmit}/>
            <CardDetail
            cardname={this.state.result.name}
            />
            </Container>
        )
    }
}
export default DeckBuild;