import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Voting pair={pair} />
      </div>
    );
  }
}

export default App;
