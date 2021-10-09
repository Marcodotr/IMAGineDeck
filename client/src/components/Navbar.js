import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import favicon from "../assets/favicon.png";
=======
// import favicon from "../assets/favicon.png";
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9
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
<<<<<<< HEAD
            <Link to= '/'>
            <img alt="" style={{maxWidth:'25px', maxHeight:'25px'}} src={favicon} />
            </Link>
=======
            {/* <Link to= '/'>
            <img alt="" style={{maxWidth:'25px', maxHeight:'25px'}} src={favicon} />
            </Link> */}
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9
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
<<<<<<< HEAD



          <Menu.Item //show login and signup if NOT logged in
            name="Login"
=======
        
      
          <Menu.Item //show login and signup if NOT logged in
            name="Login"
            as={NavLink}
            to="/Login"
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Login
          </Menu.Item>

          <Menu.Item
            name="Signup"
<<<<<<< HEAD
=======
            as={NavLink}
            to="/Signup"
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Signup
          </Menu.Item>
<<<<<<< HEAD
=======
            <Menu.Item
            name="Logout"
            as={NavLink}
            to="/Logout"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            color={"blue"}
          >
            Logout
          </Menu.Item>
        
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9
        </Menu>
      </div>
    );
  }
}
<<<<<<< HEAD
// }
=======
// }
>>>>>>> 021e3a854e5f987c330b6906b13bd25aae8639d9
