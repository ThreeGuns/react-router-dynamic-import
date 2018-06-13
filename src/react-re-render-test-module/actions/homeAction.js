/**
 *  Created by cl on 2018/6/13
 */

export const changeAToBExternal = data => async dispatch => {
    const pro = new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 0);
    });
    const done = await pro;
    console.log(done);
    dispatch({type: 'a-b-external', data: done});
};