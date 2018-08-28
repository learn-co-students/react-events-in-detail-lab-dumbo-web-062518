// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleClick = (e) => {
    setTimeout(() => {
      e.persist()
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      </button>
    )
  }
}

export default DelayedButton;
