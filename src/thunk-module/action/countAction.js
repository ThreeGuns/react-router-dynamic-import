/**
 *  Created by cl on 2018/5/10
 */

const a = {
    /*asyncAddTwo: () => async dispatch => {
        const a = await new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    type: 'add-two'
                });
            }, 1000);
        });
        return dispatch(a);
    },*/
    asyncAddTwo: (...args) => async dispatch => {
        console.log(`--- ${args}`);
        const pro = await new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    type: 'add-two'
                });
            }, 100);
        });
        return dispatch(pro);
    },
};

export default a;