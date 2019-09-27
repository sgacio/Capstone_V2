import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './MainNavBar.scss'

export class MainNavBar extends Component {

  render() {
    return (
      <Menu className="bm-burger-button">
        <a id="home" className="menu-item" href="/">Username</a>
        <a id="about" className="menu-item" href="/about">Redeem</a>
        <a id="contact" className="menu-item" href="/contact">Admin</a>
      </Menu>
    );
  }
}


export default MainNavBar;

