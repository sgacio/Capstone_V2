import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <td>
        <p>{this.props.p}</p>
      </td>
    )
  }
}

export default Table
