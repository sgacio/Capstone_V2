import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './components/Home'

import  AdminPage  from './components/AdminPage'

import Login from './components/Login'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Login} />
        <Route exact path="/Game/:id" component={Home} />

        <Route exact path="/admin" component={AdminPage} />

      </Layout>
    )
  }
}
