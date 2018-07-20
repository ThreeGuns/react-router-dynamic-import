/**
 *  Created by cl on 2018/5/29
 */

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from '../reducers';
import MsgContainer from './MsgContainer';

class Root extends Component {

    constructor() {
        super();
        this.store = createStore(reducers, applyMiddleware(...[thunk]));
    }

    render() {
        return (
            <Provider store={this.store}>
                <div className="message-notify-module">
                    <MsgContainer></MsgContainer>
                </div>
            </Provider>
        );
    }
}

export default Root;