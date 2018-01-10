import React from 'react';
import { mount } from 'enzyme';
import Results from '.';
import { Map, List } from 'immutable';

describe('<Results />', () => {

  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({ 'Trainspotting': 5 });
    const results = mount(<Results pair={pair} tally={tally} />);

    const entries = results.find('.entry');
    const [train, days] = entries.map(e => e.text())

    expect(entries).toHaveLength(2);
    expect(train).toContain('Trainspotting');
    expect(train).toContain('5');
    expect(days).toContain('28 Days Later');
    expect(days).toContain('0');
  });

  it('invokes the next callback when the next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;
    const pair = List.of('Trainspotting', '28 Days Later');
    const results = mount(<Results pair={pair} tally={Map()} next={next} />);
    const nextButton = results.find('button.next');

    nextButton.simulate('click');

    expect(nextInvoked).toEqual(true);
  });

  it('renders the winner when there is one', () => {
    const results = mount(<Results winner="Trainspotting" pair={['Trainspotting', '28 Days Later']} tally={Map()} />);
    const winner = results.find('div.winner');
    expect(winner.text()).toContain('Trainspotting');
  });
});
