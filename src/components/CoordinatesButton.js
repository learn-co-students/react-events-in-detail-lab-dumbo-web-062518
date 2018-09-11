// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <button onClick={(e) => {
          var arr = [e.clientX, e.clientY]
          this.props.onReceiveCoordinates(arr)
        }}>Button</button>
      </div>)
  }
}
