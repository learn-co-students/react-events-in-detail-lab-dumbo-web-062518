// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

  handleClick = (event) => {
    setTimeout((delay) => {
      event.persist()
      this.props.onDelayedClick(event)
    }, this.props.delay )
  }



  render(){
    return(
      <div>
        <button onClick ={this.handleClick}> Delayed Button</button>
      </div>
    )}
}
