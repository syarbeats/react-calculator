import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display'

describe('Calculator', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator />));

    it('should render a <div/>', function () {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render display component', function () {
        expect(wrapper.containsMatchingElement(<Display/>)).toEqual(true);
    });
});