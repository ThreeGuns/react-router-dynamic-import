/**
 *  Created by cl on 2018/6/7
 */

import {combineReducers} from 'redux';

import homeReducer from './homeReducer';
import perfTestReduxReducer from './perfTestReduxReducer';
import testReducer from './testReducer';

export default combineReducers({
    homeReducer,
    perfTestReduxReducer,
    testReducer,
});