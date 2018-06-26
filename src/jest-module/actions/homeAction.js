/**
 * Create by cl on 2018/6/25
 */

export const clickAddOne = (data) => dispatch => {
    dispatch({type: 'addOne'});
};

export const clickAddOneAsync = (data) => dispatch => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(dispatch({type: 'addOneAsync'}));
        }, 0);
    });

};
export const clickReduceOne = () => {
    return {type: 'reduceOne'};
};

