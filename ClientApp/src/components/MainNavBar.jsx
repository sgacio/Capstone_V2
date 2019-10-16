import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from 'reactstrap'

import './MainNavBar.scss'
import { AdminPage } from './AdminPage'
import Home from './Home'

export class MainNavBar extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <main className="nav-bar-main">
        <header>
          <Navbar
            className="navbar-expand-sm ng-white border-bottom box-shadow mb-3 justify-content-center"
            light
          >
            <i class="fan fas fa-mug-hot"></i>
            <NavbarBrand className="coffee-clicker font-weight-bolder font-italic">
              Coffee Clicker
            </NavbarBrand>
            <i class="fan fas fa-mug-hot"></i>
          </Navbar>
        </header>
        <Router>
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/AdminPage" component={AdminPage}></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default MainNavBar
