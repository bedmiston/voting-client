import { List, Map, fromJS } from 'immutable';
import reducer from './reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({ 'Trainspotting': 1 })
        })
      })
    };

    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }));
  });

  it('handles SET_STATE without initial state', () => {
  const action = {
    type: 'SET_STATE',
    state: {
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      }
    }
  };
  const nextState = reducer(undefined, action);

  expect(nextState).toEqual(fromJS({
    vote: {
      pair: ['Trainspotting', '28 Days Later'],
      tally: {Trainspotting: 1}
    }
  }));
});
});
