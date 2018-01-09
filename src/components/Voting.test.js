import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Voting from './Voting';

describe('<Voting />', () => {
  it('renders a pair of buttons', () => {
    const voting = mount(<Voting pair={["Trainspotting", "28 Days Later"]} />)
    const buttons = voting.find('button');

    expect(buttons).toHaveLength(2);
    expect(buttons.at(0).text()).toBe('Trainspotting');
    expect(buttons.at(1).text()).toBe('28 Days Later');
  });

  it('invokes callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;
    const voting = mount(<Voting pair={["Trainspotting", "28 Days Later"]} vote={vote} />);

    const buttons = voting.find('button');
    buttons.at(0).simulate('click');
    expect(votedWith).toBe('Trainspotting');
  });
});
