/**
 *  Created by cl on 2018/5/10
 */

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducer/index';
import CountContainer from './CountContainer';

class ThunkModule extends React.Component{

    constructor(){
        super();
        const middlewares = [thunk];
        const apply = applyMiddleware(...middlewares);
        this.store = createStore(reducer, apply);
    }

    render(){
        return (
            <Provider store={this.store}>
                <CountContainer></CountContainer>
            </Provider>
        );
    }

}

export default ThunkModule;