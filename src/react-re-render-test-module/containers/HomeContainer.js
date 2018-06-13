/**
 *  Created by cl on 2018/6/7
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import A from '../components/A';
import AA from '../components/AA';
import B from '../components/B';
import BB from '../components/BB';
import C from '../components/C';
import CC from '../components/CC';
import D from '../components/D';
import PerfTestComponent from '../components/PerfTestComponent';
import PerfTestReduxContainer from './PerfTestReduxContainer';

import {changeAToBExternal} from '../actions/homeAction';

class HomeContainer extends Component{

    constructor(){
        super();
        this.cnt = 0;
        console.log(`re-render-module HomeContainer created`);
    }

    componentDidMount(){
        this.cnt ++;
        console.log(`re-render-module HomeContainer componentDidMount`);
    }

    componentWillUnmount(){
        console.log(`re-render-module HomeContainer componentWillUnmount`);
    }

    // shouldComponentUpdate(){
    //     console.log(`re-render-module HomeContainer shouldComponentUpdate`);
    // }

    componentDidUpdate(){
        console.log(`re-render-module HomeContainer componentDidUpdate`);
    }

    render(){
        console.log(`re-render-module HomeContainer render: and cnt is --> ${this.cnt}`);
        const {aStatus, acStatus, changeAToB, changeBToA, changeACToAD, changeADToAC, listBB, insertBB, removeBB} = this.props;
        const color = acStatus ? 'white' : 'red';
        return (
            <div>
                {
                    aStatus ?
                    <A style={{color: color}}>
                        { acStatus ?
                            <C></C> : null
                        }
                        { !acStatus ?
                            <D></D> : null
                        }
                    </A>
                        : null
                }
                {
                    !aStatus ?
                    <B>
                        <C></C>
                    </B>
                        : null

                }

                <button onClick={changeAToB}>change A -> B</button>
                <button onClick={changeBToA}>change B -> A</button>
                <button onClick={changeACToAD}>change AC -> AD</button>
                <button onClick={changeADToAC}>change AD -> AC</button>

                <p/>

                <div>
                    <AA></AA>
                    {
                        listBB ?
                        <BB></BB>
                        :
                        null
                    }
                    <CC></CC>

                    <button onClick={insertBB}>insertBB</button>
                    <button onClick={removeBB}>removeBB</button>
                </div>

                <hr/>

                <div>
                    {/*<PerfTestComponent></PerfTestComponent>*/}
                    <PerfTestReduxContainer/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return state.homeReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        home: (data) => {
            dispatch({type: 'home', data});
        },
        changeAToB: () => {
            // dispatch({type:'a-b'});
            dispatch(changeAToBExternal());
        },
        changeBToA: () => {
            dispatch({type:'b-a'});
        },
        changeACToAD: () => {
            dispatch({type:'ac-ad'});
        },
        changeADToAC: () => {
            dispatch({type:'ad-ac'});
        },
        insertBB: () => {
            dispatch({type:'insertBB'});
        },
        removeBB: () => {
            dispatch({type:'removeBB'});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);