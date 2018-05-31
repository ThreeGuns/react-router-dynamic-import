/**
 *  Created by cl on 2018/5/29
 */

import {combineReducers} from 'redux';

import testReducer from './testReducer';
import certificateReduce from './certificateReduce';

export default combineReducers({
    testReducer,
    certificateReduce,
});