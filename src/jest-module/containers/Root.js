/**
 *  Created by cl on 2018/6/7
 */

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from '../reducers';
import HomeContainer from './HomeContainer';
import FooterContainer from './FooterContainer';

class Root extends Component {

    constructor() {
        super();
        this.store = createStore(reducers, composeWithDevTools(applyMiddleware(...[thunk])));
    }

    render() {
        const {match} = this.props;
        return (
            <Provider store={this.store}>
                <div className="jest-module">
                    <HomeContainer/>
                    <FooterContainer/>
                </div>
            </Provider>
        );
    }
}

export default Root;