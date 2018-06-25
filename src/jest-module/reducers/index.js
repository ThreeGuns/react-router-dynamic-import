/**
 * Create by cl on 2018/6/22
 */

import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import footerReducer from './footerReducer';

export default combineReducers({
    homeReducer,
    footerReducer
});