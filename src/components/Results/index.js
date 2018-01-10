import React, { Component } from 'react'
import { connect } from 'react-redux';
import Tally from './Tally';
import Winner from '../Winner';


const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  tally: state.getIn(['vote', 'tally']),
  winner: state.get('winner')
});

export class Results extends Component {
  render() {
    return (
      this.props.winner ?
        <Winner winner={this.props.winner} /> :
        <Tally {...this.props} />
    );
  }
};

export const ResultsContainer = connect(mapStateToProps)(Results);
