// Code CoordinatesButton Component Here
import React,  { Component } from 'react'

export default class  extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleClick = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={e => this.handleClick(e)}>Coords Button</button>
    )
  }
}
