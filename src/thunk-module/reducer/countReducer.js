/**
 *  Created by cl on 2018/5/10
 */

const counterReducer = (state = {cnt: 0}, action) => {
    switch (action.type){
        case 'add':
            return {
                cnt: ++state.cnt
            };
        case 'add-two':
            return {
                cnt: state.cnt + 2
            };
        case 'reduce':
            return {
                cnt: --state.cnt
            };
        default:
            return state;
    }
};

export default counterReducer;