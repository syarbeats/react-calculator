import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from "../Calculator/Calculator.test";


describe('App', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

 it('should render a <div/>', () => {
    //const wrapper = shallow(<App/>);
    expect(wrapper.find('div').length).toEqual(1);
 });
});