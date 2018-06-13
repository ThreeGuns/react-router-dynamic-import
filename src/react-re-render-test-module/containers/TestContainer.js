/**
 *  Created by cl on 2018/6/7
 */

import React, {Component, PureComponent} from 'react';
import {connect} from 'react-redux';

class TestContainer extends PureComponent{

    constructor(){
        super();
        this.cnt = 0;
        console.log(`re-render-module TestContainer created`);
    }

    componentDidMount(){
        console.log(`re-render-module TestContainer componentDidMount`);
    }

    componentWillUnmount(){
        this.cnt ++;
        console.log(`re-render-module TestContainer componentWillUnmount`);
    }

    // shouldComponentUpdate(nextProps, nextStates){
    //     //return nextProps.status !== this.props.status;
    //     return true;
    // }

    componentDidUpdate(){
        console.log(`re-render-module TestContainer componentDidUpdate`);
    }

    render(){
        console.log(`re-render-module TestContainer render: ${JSON.stringify(this.props)} now cnt is --> ${this.cnt}`);
        return (
            <div>
                test page!
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return state.testReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);