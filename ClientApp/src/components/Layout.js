import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import MainNavBar from './MainNavBar';
import Footer from './Footer';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="main-div-body">
        <div>
          <MainNavBar />
          <Container>
            {this.props.children}
          </Container>
          <Footer />
        </div>


      </div>
    );
  }
}
