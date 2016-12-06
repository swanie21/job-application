import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Application from '../lib/components/Application';
import Introduction from '../lib/components/Introduction';
import SidePhotos from '../lib/components/SidePhotos';
import Facts from '../lib/components/Facts';
import WorkEthic from '../lib/components/WorkEthic';
import Closing from '../lib/components/Closing';

describe('application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'section');
  });
});

describe('components', () => {
   const wrapper = shallow(<Application />);

   it('has an Introduction component', () => {
      assert.lengthOf(wrapper.find('Introduction'), 1);
    });

   it('has a SidePhotos component', () => {
      assert.lengthOf(wrapper.find('SidePhotos'), 1);
    });

    it('has a Facts component', () => {
       assert.lengthOf(wrapper.find('Facts'), 1);
     });

    it('has a WorkEthic component', () => {
        assert.lengthOf(wrapper.find('WorkEthic'), 1);
    });
    it('has a Closing component', () => {
        assert.lengthOf(wrapper.find('Closing'), 1);
    });
 });
