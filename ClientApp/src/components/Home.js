import React, { Component } from 'react';
import Latest from './images/latest.png';
import './layout.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        {/* 
        Small devices (landscape phones, 576px and up)
        Medium devices (tablets, 768px and up)
        Large devices (desktops, 992px and up)
        Extra large devices (large desktops, 1200px and up) 
        */}
        <div className="container">
          <p><span>Username</span> Coffee Shop</p>
          <p><span>1</span> Coffee's collected</p>
          <p><span>1</span> Cups Per Second(CPS)</p>
          <img src={Latest} className="coffee-image img-fluid" alt="White starbucks coffee cup"></img>
          <div className="container-fluid">

            <table className="table table-dark">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">clicker</th>
                  <th scope="col">Worker</th>
                  <th scope="col">Keurig</th>
                  <th scope="col">Factory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Number Of</th>
                  <td><p>2</p></td>
                  <td><p>1</p></td>
                  <td><p>1</p></td>
                  <td><p>1</p></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>Cost</th>
                  <td><p>10</p></td>
                  <td><p>10</p></td>
                  <td><p>10</p></td>
                  <td><p>10</p></td>
                </tr>
              </tbody>

            </table>
          </div>





        </div>


      </>
    );
  }
}
