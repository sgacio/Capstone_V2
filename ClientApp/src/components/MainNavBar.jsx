import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './MainNavBar.scss'
import { AdminPage } from './AdminPage'
import Home from './Home'

export class MainNavBar extends Component {
  render() {
    return (
      <main>
        <Router>
          <Menu right>
            <Link className="menu-item" to="/Home">
              CoffeeClicker
            </Link>
            {/* <Link className="menu-item" to="/UserProfile">Username</Link>
            <Link className="menu-item" to="/RedeemPage">Redeem</Link> */}
            <Link className="menu-item" to="/AdminPage">
              Admin
            </Link>
          </Menu>

          <switch>
            <Route exact path="/Home" component={Home}></Route>
            {/* <Route exact path="/UserProfile" component={UserProfile}></Route>
          <Route exact path="/RedeemPage" component={RedeemPage}></Route> */}
            <Route exact path="/AdminPage" component={AdminPage}></Route>
          </switch>
        </Router>
      </main>
    )
  }
}

export default MainNavBar
