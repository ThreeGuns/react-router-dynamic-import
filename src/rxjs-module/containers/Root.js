/**
 *  Created by cl on 2018/6/13
 */

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from '../reducers';
import RxjsHomeContainer from './RxjsHomeContainer';


class Root extends Component {

    constructor() {
        super();
        this.store = createStore(reducers, applyMiddleware(...[thunk]));
    }

    render() {
        const {match} = this.props;
        return (
            <Provider store={this.store}>
                <div className="rxjs">
                    <ul>
                        <li><Link to={`${match.url}/home`}>home</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path={`${match.url}/home`} component={RxjsHomeContainer}></Route>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default Root;