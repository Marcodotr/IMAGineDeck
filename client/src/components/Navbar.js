import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import favicon from "../assets/favicon.png";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu stackable inverted>
          <Menu.Item>
            <Link to= '/'>
            <img alt="" style={{maxWidth:'25px', maxHeight:'25px'}} src={favicon} />
            </Link>
          </Menu.Item>

          <Menu.Item
            name="heroselect"
            as={NavLink}
            to="/heroselect"
            active={activeItem === "heroselect"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Build a Deck
          </Menu.Item>

          <Menu.Item
            name="view"
            as={NavLink}
            to="/saveddecks"
            active={activeItem === "view"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            View my decks
          </Menu.Item>



          <Menu.Item //show login and signup if NOT logged in
            name="Login"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Login
          </Menu.Item>

          <Menu.Item
            name="Signup"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Signup
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
// }
