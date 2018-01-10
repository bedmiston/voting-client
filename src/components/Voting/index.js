import React from 'react'
import { connect } from 'react-redux';
import Vote from './Vote';
import Winner from '../Winner';

const mapStateToProps = state => ({
  pair: state.getIn(['vote', 'pair']),
  winner: state.get('winner')
})

export class Voting extends React.Component {
  render() {
    return (<div>
      {this.props.winner ?
        <Winner winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>);
  }
}

export const VotingContainer = connect(mapStateToProps)(Voting);
