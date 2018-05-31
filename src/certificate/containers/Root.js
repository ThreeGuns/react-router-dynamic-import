/**
 *  Created by cl on 2018/5/29
 */

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from '../reducers';
import CertificateTipRouter from './CertificateTipRouter';
import CertificateWriteInfoRouter from './CertificateWriteInfoRouter';
import CertificateFileListRouter from './CertificateFileListRouter';
import CertificateMissionRouter from './CertificateMissionRouter';
import CertificateNavbarContainer from './CertificateNavbarContainer';
import CertificateHeaderContainer from './CertificateHeaderContainer';

class Root extends Component {

    constructor() {
        super();
        this.store = createStore(reducers, applyMiddleware(...[thunk]));
    }

    render() {
        return (
            <Provider store={this.store}>
                <div className="certificate">
                    <CertificateHeaderContainer/>
                    <CertificateNavbarContainer/>
                    <Switch>
                        <Route exact path="/certificate/test" component={() => <div>aaa</div>}></Route>
                        <Route exact path="/certificate/CertificateTipRouter" component={CertificateTipRouter}></Route>
                        <Route exact path="/certificate/CertificateWriteInfoRouter" component={CertificateWriteInfoRouter}></Route>
                        <Route exact path="/certificate/CertificateFileListRouter" component={CertificateFileListRouter}></Route>
                        <Route exact path="/certificate/CertificateMissionRouter" component={CertificateMissionRouter}></Route>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default Root;