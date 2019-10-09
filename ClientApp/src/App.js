import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import Home from './components/Home'
import { FetchData } from './components/FetchData'
import AdminPage from './components/AdminPage'
import Login from './components/Login'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        {/* <Route path="/fetch-data" component={FetchData} /> */}
        <Route path="/AdminPage" component={AdminPage} />
        <Route path="/Login" component={Login} />
      </Layout>
    )
  }
}
