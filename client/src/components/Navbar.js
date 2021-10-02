import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
export default class Navbar extends Component {
  state = { activeItem: "Blue" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu stackable inverted>
          <Menu.Item>{/* <img src='/logo.png' /> */}</Menu.Item>

          <Menu.Item
            name="build"
            active={activeItem === "build"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Build a Deck
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Home
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="/Test"
            name="view"
            active={activeItem === "view"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            View all Decks
          </Menu.Item>

          <Menu.Item
            name="browse"
            active={activeItem === "browse"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Browse all Cards
          </Menu.Item>

          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Profile
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
