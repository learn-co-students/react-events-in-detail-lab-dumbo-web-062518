// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (e) => {
    const coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        >
      </button>
    )
  }
}

export default CoordinatesButton;
