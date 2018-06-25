/**
 * Create by cl on 2018/6/25
 */


import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducers from '../../../src/jest-module/reducers';
import HomeContainer from '../../../src/jest-module/containers/HomeContainer';
import FooterContainer from '../../../src/jest-module/containers/FooterContainer';

configure({ adapter: new Adapter() });

describe('Rooter test', () => {
    let store, wrapper;
    beforeEach( () => {
        store = createStore(reducers, applyMiddleware(...[thunk]));
        wrapper = mount(
            <Provider store={store}>
                <div className="jest-module">
                    <HomeContainer/>
                    <FooterContainer/>
                </div>
            </Provider>
        );
    });
    it('click add one', () => {
        wrapper.find('#btn-add').simulate('click');
        expect(wrapper.find('#cnt').text()).toEqual('1');
    });
    it('click reduce one', () => {
        wrapper.find('#btn-reduce').simulate('click');
        expect(wrapper.find('#cnt').text()).toEqual('-1');
    });
    it('click footer a', () => {
        wrapper.find('#footer-a').simulate('click');
        expect(1).toEqual(1);
    });
});
