import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>hello, this div has been clicked: {this.props.clicks} times</div>
    )
  } 
}

export default App;
