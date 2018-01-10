import React from 'react';
import { Map } from 'immutable';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Voting from '../components/Voting';
import Results from '../components/Results';

storiesOf('Voting', module)
  .add('Without winner', () => <Voting pair={['Die Hard', 'Lethal Weapon']} />)
  .add('With winner', () => <Voting winner="Lethal Weapon" pair={['Die Hard', 'Lethal Weapon']} />);

storiesOf('Results', module)
  .add('Without winner and no counts', () => <Results pair={['Die Hard', 'Lethal Weapon']} tally={Map()} />)
  .add('Without winner and counts', () => <Results pair={['Die Hard', 'Lethal Weapon']} tally={Map({ 'Die Hard': 3, 'Lethal Weapon': 6 })} />)
  .add('With winner', () => <Results winner="Lethal Weapon" pair={['Die Hard', 'Lethal Weapon']} tally={Map()} />);
