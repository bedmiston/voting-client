import React, { Component } from 'react'
import Tally from './Tally';
import Winner from '../Winner';

class Results extends Component {
  render() {
    return (
      this.props.winner ?
        <Winner winner={this.props.winner} /> :
        <Tally {...this.props} />
    );
  }
};

export default Results;
