import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }  
  }

  xBitrate = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  xResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.xBitrate} className='bitrate'></button>
        <button onClick={this.xResolution} className='resolution'></button>
      </div>
    )
  }
}