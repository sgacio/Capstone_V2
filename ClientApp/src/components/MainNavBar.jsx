import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,

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
      <main>
        <header>
          <Navbar
            className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
            light
          >

            <NavbarBrand tag={Link} to="/">
              CoffeeClicker
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Login">
                  Login
                  </NavLink>
              </NavItem>{' '}

              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/logout">
                  Logout
                  </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/AdminPage">
                  Admins
                  </NavLink>
              </NavItem>
            </ul>


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
