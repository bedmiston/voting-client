import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Voting from './Voting';

describe('<Voting />', () => {
  it('renders a pair of buttons', () => {
    const voting = shallow(<Voting pair={["Trainspotting", "28 Days Later"]} />)
    const buttons = voting.find('button');

    expect(buttons).toHaveLength(2);
    expect(buttons.at(0).text()).toBe('Trainspotting');
    expect(buttons.at(1).text()).toBe('28 Days Later');
  });
});
