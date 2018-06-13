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
import TestContainer from './TestContainer';


class Root extends Component {

    constructor() {
        super();
        this.store = createStore(reducers, composeWithDevTools(applyMiddleware(...[thunk])));
    }

    render() {
        const {match} = this.props;
        return (
            <Provider store={this.store}>
                <div className="re-render-test">
                    <ul>
                        <li><Link to={`${match.url}/home`}>home</Link></li>
                        <li><Link to={`${match.url}/test`}>test</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path={`${match.url}/home`} component={HomeContainer}></Route>
                        <Route exact path={`${match.url}/test`} component={TestContainer}></Route>
                    </Switch>

                </div>
            </Provider>
        );
    }
}

export default Root;