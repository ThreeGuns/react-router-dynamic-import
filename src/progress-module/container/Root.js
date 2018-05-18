/**
 *  Created by cl on 2018/5/17
 */

import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from '../reducer';
import ProgressContainer from './ProgressContainer';

class Root extends Component{

    constructor(){
        super();
        this.store = createStore(reducers, applyMiddleware(...[thunk]));
        this.tasks = [
            {
                id: 1,
                name: '我的创作设计_原创证书',
                percent: 85,
                pause: true,
            },
            {
                id: 2,
                name: '798园区大众建筑图',
                percent: 100,
                pause: true,
            },
            {
                id: 3,
                name: '前端简历筛选',
                percent: 50,
                pause: true,
            },
            {
                id: 4,
                name: '确权软件客户端',
                percent: 20,
                pause: false,
            },
        ];
    }

    render(){
        return (
            <Provider store={this.store}>
                <div>
                    <ProgressContainer initData={this.tasks}></ProgressContainer>
                </div>
            </Provider>
        );

    }
}

export default Root;