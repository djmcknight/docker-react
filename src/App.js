import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello there!, take #3</h2>
        </div>
        <p className="App-intro">
         I was changed on the feature branch feature/djmcknight/new-feature
        </p>
      </div>
    );
  }
}

export default App;
