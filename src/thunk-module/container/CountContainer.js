/**
 *  Created by cl on 2018/5/10
 */

import {connect} from 'react-redux';

import CountComponent from '../component/CountComponent';
import countActioin from '../action/countAction';

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer
    };
};

const a = () => async dispatch => {
    const b = await new Promise((res, rej) => {
        setTimeout(()=>{
            res({type: 'add'});
        }, 100);
    });
    dispatch(b);
};

const aa = async dispatch => {
    const b = await new Promise((res, rej) => {
        setTimeout(()=>{
            res({type: 'add'});
        }, 1000);
    });
    dispatch(b);
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {
            dispatch({type: 'add'});
        },
        reduce: () => {
            dispatch({type: 'reduce'});
        },
        asyncAddTwo: () => {
            //第一种方式
            // dispatch(countActioin.asyncAddTwo());
            //第二种方式
            //dispatch(a());
            //第三种方式
            //dispatch(aa);
            //第四种方式
            const temp = async () => {
                const b = await new Promise((res, rej) => {
                    setTimeout(()=>{
                        res({type: 'add'});
                    }, 2000);
                });
                return b;
            };
            temp().then((ret) => {
                dispatch(ret);
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent);