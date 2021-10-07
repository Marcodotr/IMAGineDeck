import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Signup from './Signup';
import Login from './Login';

// import Signup from '../pages/Signup';
// import Login from '../pages/Login';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            IMAGine Deck
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/allCards'>
                  Browse All Cards
                  </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/buildDeck'>
                  Build a Deck
                  </Nav.Link>
                  <Nav.Link as={Link} to='/allDecks'>
                  View All Decks
                  </Nav.Link>
                  <Nav.Link as={Link} to='/allCards'>
                  Browse All Cards
                  </Nav.Link>
                  <Nav.Link as={Link} to='/profile'>
                  Profile
                  </Nav.Link>
                  
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : ( //else show login signup
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;



// import React, { Component } from "react";
// import { Menu, Input } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
// import { NavLink, withRouter } from "react-router-dom";
// import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
// import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {
//   state = { activeItem: "" };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {  
//     const { activeItem } = this.state;

//     // if(Auth.loggedIn())
//     // {
//     // return (
//     //     <div>
//     //   <Menu stackable inverted>
//     //     <Menu.Item>
//     //       {/* <img src='/logo.png' /> */}
//     //     </Menu.Item>

//     //     <Menu.Item
//     //       name='build'
//     //       active={activeItem === 'build'}
//     //       onClick={this.handleItemClick}
//     //       color={'blue'}
          
//     //     >
//     //       Build a Deck
//     //     </Menu.Item>

//     //     <Menu.Item
//     //       name='view'
//     //       active={activeItem === 'view'}
//     //       onClick={this.handleItemClick}
//     //       color={'blue'}
//     //     >
//     //       View all Decks
//     //     </Menu.Item>

//     //     <Menu.Item
//     //       name='browse'
//     //       active={activeItem === 'browse'}
//     //       onClick={this.handleItemClick}
//     //       color={'blue'}
//     //     >
//     //       Browse all Cards
//     //     </Menu.Item>

//     //     <Menu.Item
//     //       name='profile'
//     //       active={activeItem === 'profile'}
//     //       onClick={this.handleItemClick}
//     //       color={'blue'}
//     //     >
//     //       Profile
//     //     </Menu.Item>
    
//     //     <Menu.Item //Show if logged in
//     //       name='Log out'
//     //       active={activeItem === 'profile'}
//     //       onClick={this.handleItemClick}
//     //       color={'blue'}
//     //     >
//     //       Log out
//     //     </Menu.Item>

//     //   </Menu>
//     //   </div>
//     // )
//     // }
//     // else
//     // {
//     return (
//       <div>
//     <Menu stackable inverted>
//       <Menu.Item>
//         {/* <img src='/logo.png' /> */}
//       </Menu.Item>

//       <Menu.Item
//         name='heroselect'
//         as={NavLink} to='/heroselect'
//         active={activeItem === 'heroselect'}
//         onClick={this.handleItemClick}
//         color={'blue'}
        
//       >
//         Build a Deck
//       </Menu.Item>

//       <Menu.Item
//         name='view'
//         active={activeItem === 'view'}
//         onClick={this.handleItemClick}
//         color={'blue'}
//       >
//         View all Decks
//       </Menu.Item>

//       <Menu.Item
//         name='browse'
//         active={activeItem === 'browse'}
//         onClick={this.handleItemClick}
//         color={'blue'}
//       >
//         Browse all Cards
//       </Menu.Item>

//       <Menu.Item
//         name='profile'
//         active={activeItem === 'profile'}
//         onClick={this.handleItemClick}
//         color={'blue'}
//       >
//         Profile
//       </Menu.Item>

//         <Menu.Item //show login and signup if NOT logged in
//           name='Login'
//           linkButton={true} href="/login"
//           active={activeItem === 'Login'}
//           onClick={this.handleItemClick}
//           color={'blue'}
//         >
//           Login
//         </Menu.Item>

//         <Menu.Item
//           name='Signup'
//           as={Link} to='/signup' exact="true"
//           linkButton={true} href="/signup"
//           active={activeItem === 'Signup'}
//           onClick={this.handleItemClick}
//           color={'blue'}
//         >
//           Signup
//         </Menu.Item>
//       </Menu>
//       </div>
//     )
//     }
//   }
// // }



