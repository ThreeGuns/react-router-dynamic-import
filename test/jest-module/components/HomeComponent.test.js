/**
 * Create by cl on 2018/6/25
 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import HomeComponent from '../../../src/jest-module/components/HomeComponent';

describe('HomeComponent', () => {

    let setup;

    beforeEach(() => {
        setup = () => {
            const props = {
                cnt: 1,
                clickBtn: jest.fn(),
                clickBtn2: () => {

                },
            };
            const wrapper = shallow(<HomeComponent {...props}/>);
            return {props, wrapper};
        };
    });

    it('btn', () => {
        const {wrapper} = setup();
        expect(wrapper.find('#cnt').exists()).toBeTruthy();
    });

    it('click btn', () => {
        const {props, wrapper} = setup();
        wrapper.find('#btn-add').simulate('click');
        expect(props.clickBtn).toBeCalled();
        expect(wrapper.find('#cnt').text()).toEqual("1");
    });
});
