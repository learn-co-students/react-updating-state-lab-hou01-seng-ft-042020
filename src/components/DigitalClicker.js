import React from 'react';
// Code DigitalClicker Component Here
export default class DigitalClicker extends React.Component {
  constructor(props) {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    const newVal = this.state.timesClicked + 1
    this.setState({
      timesClicked: newVal 
    })
  }

  render() {
    return (
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    )
  }
}