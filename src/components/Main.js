import React from 'react'
import { Route } from 'react-router-dom';
import Voting from './Voting';
import Results from './Results';
import { List, Map } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({ 'Trainspotting': 5, '28 Days Later': 4 });

const Main = () => (
  <main>
    <div>
      <Route exact path='/' render={() => <Voting pair={pair} />} />
      <Route path='/voting' render={() => <Voting pair={pair} />} />
      <Route path="/results" render={() => <Results pair={pair} tally={tally} />} />
    </div>
  </main>
)

export default Main
