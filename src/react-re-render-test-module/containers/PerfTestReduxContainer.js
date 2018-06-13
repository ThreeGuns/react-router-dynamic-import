/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';
import {connect} from 'react-redux';
import perfTestReduxReducer from "../reducers/perfTestReduxReducer";

class ItemComponent extends PureComponent{
    render(){
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}

class PerfTestReduxContainer extends Component {
    constructor(props) {
        super(props);
        console.log('PerfTestReduxContainer is created');
        this.arr = this.generateArray(5000);
    }
    componentDidMount() {
        console.log('PerfTestReduxContainer componentDidMount')
        console.log(new Date().getTime());
    }
    componentWillUnmount() {
        console.log('PerfTestReduxContainer componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('PerfTestReduxContainer componentDidUpdate');
        console.log(new Date().getTime());
    }
    // shouldComponentUpdate(){
    //     console.log('A shouldComponentUpdate')
    // }

    generateArray(size){
        return Array.apply(null, { length: size }).map(Number.call, Number);
    }
    render () {
        console.log('PerfTestReduxContainer render');
        console.log(new Date().getTime());

        const {resetMultiplier, multiplier} = this.props;
        return (
            <div>
                <button onClick={() => {resetMultiplier(1)}}>Click Me 1</button>
                <button onClick={() => {resetMultiplier(2)}}>Click Me 2</button>
                <ul>
                    {
                        this.arr.map((one, i) => <ItemComponent key={i} text={i+multiplier}/>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.perfTestReduxReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetMultiplier: (data) => {
            dispatch({type: 'change-index', data});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfTestReduxContainer);