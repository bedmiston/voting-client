import React, { Component } from 'react'
import Vote from './Vote';
import Winner from './Winner';


const Voting = (props) => {
  return (<div>
    {props.winner ?
      <Winner winner={props.winner} /> :
      <Vote {...props} />}
  </div>);
}

export default Voting;
