import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = { activeItem: "Blue" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {  
    const { activeItem } = this.state;

    if(Auth.loggedIn())
    {
    return (
        <div>
      <Menu stackable inverted>
        <Menu.Item>
          {/* <img src='/logo.png' /> */}
        </Menu.Item>

        <Menu.Item
          name='build'
          active={activeItem === 'build'}
          onClick={this.handleItemClick}
          color={'blue'}
          
        >
          Build a Deck
        </Menu.Item>

        <Menu.Item
          name='view'
          active={activeItem === 'view'}
          onClick={this.handleItemClick}
          color={'blue'}
        >
          View all Decks
        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
          color={'blue'}
        >
          Browse all Cards
        </Menu.Item>

        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          color={'blue'}
        >
          Profile
        </Menu.Item>
    
        <Menu.Item //Show if logged in
          name='Log out'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          color={'blue'}
        >
          Log out
        </Menu.Item>

      </Menu>
      </div>
    )
    }
    else
    {
    return (
      <div>
    <Menu stackable inverted>
      <Menu.Item>
        {/* <img src='/logo.png' /> */}
      </Menu.Item>

      <Menu.Item
        name='build'
        active={activeItem === 'build'}
        onClick={this.handleItemClick}
        color={'blue'}
        
      >
        Build a Deck
      </Menu.Item>

      <Menu.Item
        name='view'
        active={activeItem === 'view'}
        onClick={this.handleItemClick}
        color={'blue'}
      >
        View all Decks
      </Menu.Item>

      <Menu.Item
        name='browse'
        active={activeItem === 'browse'}
        onClick={this.handleItemClick}
        color={'blue'}
      >
        Browse all Cards
      </Menu.Item>

      <Menu.Item
        name='profile'
        active={activeItem === 'profile'}
        onClick={this.handleItemClick}
        color={'blue'}
      >
        Profile
      </Menu.Item>

        <Menu.Item //show login and signup if NOT logged in
          name='Login'
          linkButton={true} href="/login"
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
          color={'blue'}
        >
          Login
        </Menu.Item>

        <Menu.Item
          name='Signup'
          as={Link} to='/signup' exact="true"
          linkButton={true} href="/signup"
          active={activeItem === 'Signup'}
          onClick={this.handleItemClick}
          color={'blue'}
        >
          Signup
        </Menu.Item>
      </Menu>
      </div>
    )
    }
  }
}



