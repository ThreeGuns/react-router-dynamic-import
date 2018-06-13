/**
 *  Created by cl on 2018/6/7
 */

export default (state = {aStatus: 1, acStatus: 1, listBB: 0}, action) => {
    switch(action.type){
        case 'home':
            return {...state, ...{aStatus: 2}};
        case 'a-b':
            return  {...state, ...{aStatus: 0}};
        case 'a-b-external':
            console.log(action.data+1);
            return  {...state, ...{aStatus: 0}};
        case 'b-a':
            return  {...state, ...{aStatus: 1}};
        case 'ac-ad':
            return  {...state, ...{acStatus: 0}};
        case 'ad-ac':
            return  {...state, ...{acStatus: 1}};
        case 'insertBB':
            return  {...state, ...{listBB: 1}};
        case 'removeBB':
            return  {...state, ...{listBB: 0}};
        default:
            return state;
    }
};