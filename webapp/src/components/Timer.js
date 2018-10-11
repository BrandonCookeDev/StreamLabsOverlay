import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };

      this.resetTimer = this.resetTimer.bind(this);
    }
  
    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    resetTimer(e){
        this.setState(prevState => ({
            seconds: 0
        }));
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
          <br/>
          <button onClick={this.resetTimer}>Reset Timer</button>
        </div>
      );
    }
  }
  