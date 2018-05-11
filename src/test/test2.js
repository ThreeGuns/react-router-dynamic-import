/**
 *  Created by cl on 2018/5/10
 */

const a = (dispatch) => {
    console.log(1);
    //generate obj
    dispatch();
};

const dispatch = (fn) => {
    if(typeof fn === 'function'){
        fn(dispatch._dispatch);
    }else{
        dispatch._dispatch(fn);
    }

};

dispatch._dispatch = () => {
    console.log(2);
};

dispatch(a);