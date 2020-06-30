// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  handleClick = () => {
    console.log()
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    console.log(this.state.timesClicked)
    return(
      <div>
        <button
          onClick={this.handleClick}
        >
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}
