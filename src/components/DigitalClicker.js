// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let newTimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTimesClicked
        })
    }

    render() {
        const clickedNum = this.state.timesClicked
        return(
            <div>
                <button onClick={this.handleClick}>{clickedNum}</button>
            </div>
        )
    }

}

export default DigitalClicker;