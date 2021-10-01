import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
      <Menu stackable>
        <Menu.Item>
          {/* <img src='/logo.png' /> */}
        </Menu.Item>

        <Menu.Item
          name='build'
          active={activeItem === 'build'}
          onClick={this.handleItemClick}
        >
          Build a Deck
        </Menu.Item>

        <Menu.Item
          name='view'
          active={activeItem === 'view'}
          onClick={this.handleItemClick}
        >
          View all Decks
        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          Browse all Cards
        </Menu.Item>

        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}
