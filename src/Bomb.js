// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  bombMessage = () =>
  { return this.props.initialCount === 0
     ? <div>Boom!</div>
     : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
   }

  render() {
    return(
      this.bombMessage()
    )
  }
}
