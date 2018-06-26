/**
 *  Created by cl on 2018/6/7
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {clickAddOne, clickReduceOne} from '../actions/homeAction';

import HomeComponent from '../components/HomeComponent';

const mapStateToProps = (state) => {
    return state.homeReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickBtn: () => {
            dispatch(clickAddOne());
        },
        clickBtn2: () => {
            dispatch(clickReduceOne());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);