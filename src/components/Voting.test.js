import React, { Component } from 'react';
import ReactDom from 'react-dom';
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

  it('disables buttons when the user has voted', () => {
    const voting = mount(<Voting pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting" />);
    const buttons = voting.find('button');

    expect(buttons).toHaveLength(2);
    expect(buttons.at(0).prop('disabled')).toEqual(true);
    expect(buttons.at(1).prop('disabled')).toEqual(true);
  });

  it('adds label to the voted entry', () => {
    const voting = mount(<Voting pair={["Trainspotting", "28 Days Later"]} hasVoted="Trainspotting" />);
    const buttons = voting.find('button');

    expect(buttons.at(0).text()).toContain('Voted');
  });

  it('renders just the winner when there is one', () => {
    const voting = mount(<Voting winner="Trainspotting" />);
    const winner = voting.find('div.winner');

    expect(voting.find('button')).toHaveLength(0);
    expect(winner.text()).toContain('Trainspotting');
  });

  it('renders as a pure component', () => {
    const pair = ['Trainspotting', '28 Days Later'];
    const container = document.createElement('div');
    let voting = mount(<Voting pair={pair} />);

    let firstButton = voting.find('button').first();
    expect(firstButton.text()).toBe('Trainspotting');

    pair[0] = 'Sunshine';
    voting.update();
    firstButton = voting.find('button').first();
    expect(firstButton.text()).toBe('Trainspotting');
  });

});
