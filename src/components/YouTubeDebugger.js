// Code YouTubeDebugger Component Here
import React from 'react'


export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrate = () => {
    console.log (this.state.settings.bitrate)
    this.setState({
      settings: {
        ...this.state.settings, bitrate:12
      }
    })
  }

  handleRes = () => {
    console.log (this.state.settings.video.resolution)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video, resolution: '720p'
        }
      }
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <button
          className='bitrate'
          onClick={this.handleBitrate}
        >
          Bitrate
        </button>
        <button
          className='resolution'
          onClick={this.handleRes}
        >
          Resolution
        </button>

      </div>
    )
  }
}
