// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

handleButton = (e) => {
  const x = e.clientX
  const y = e.clientY

  return this.props.onReceiveCoordinates([x, y])
}

  render () {
    return (
      <div>
        <button onClick={e => this.handleButton(e)}>CoordinatesButton</button>
      </div>
    )
  }
}
