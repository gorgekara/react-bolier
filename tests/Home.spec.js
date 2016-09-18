import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../app/components/Home/Home.jsx';

describe('<Home />', () => {

  it('should contain 2 set items', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.state().items).to.have.length(2);
  });

  it('should add new item in state.items', () => {
    const wrapper = shallow(<Home />);
    wrapper.find('.btn-primary').simulate('click');
    expect(wrapper.state('items')).to.have.length(3);
  });

  it('should remove an item from state.items', () => {
    const wrapper = shallow(<Home />);
    wrapper.find('.btn--remove').first().simulate('click');
    expect(wrapper.state('items')).to.have.length(1);
  });

});