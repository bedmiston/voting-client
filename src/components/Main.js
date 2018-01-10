import React from 'react'
import { Route } from 'react-router-dom';
import { VotingContainer } from './Voting';
import { ResultsContainer } from './Results';

const Main = () => (
  <main>
    <div>
      <Route exact path='/' component={VotingContainer} />
      <Route path='/voting' component={VotingContainer} />
      <Route path="/results" component={ResultsContainer} />
    </div>
  </main>
)

export default Main
