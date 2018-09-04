// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

  handleButton= (event) => {
   const array =[event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }



  render(){
    return(
      <div>
        <button onClick ={this.handleButton}>Coordinates Button</button>
      </div>
    )}
}
