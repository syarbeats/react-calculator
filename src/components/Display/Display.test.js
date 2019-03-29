import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';


describe('Display', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<Display/>));

    it('should render a <div/>', function () {
        expect(wrapper.find('div').length).toEqual(1);
    });
});