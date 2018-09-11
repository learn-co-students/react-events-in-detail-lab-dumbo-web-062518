// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => {
          e.persist();
    	  setTimeout(() => {
            this.props.onDelayedClick(e);
          }, this.props.delay);
        }}
        >Delayed Button</button>
      </div>
    );
  }
}
