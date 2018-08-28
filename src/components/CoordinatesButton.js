// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     currentCoordinates: this.props.onReceiveCoordinates
  //   }
  // }

  handleClick = (event) => {
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }



  render() {
    return (
      <button onClick={this.handleClick}>Coordinates Button!</button>
    )
  }
}
