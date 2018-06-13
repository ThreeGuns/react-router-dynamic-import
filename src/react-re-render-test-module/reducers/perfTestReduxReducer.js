/**
 *  Created by cl on 2018/6/7
 */

export default (state = {multiplier: 0}, action) => {
    switch(action.type){
        case 'change-index':
            return  {...state, ...{multiplier: action.data}};
        default:
            return state;
    }
};