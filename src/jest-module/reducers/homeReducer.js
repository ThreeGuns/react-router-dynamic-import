/**
 * Create by cl on 2018/6/22
 */

export default (state = {cnt: 0}, action) => {
    switch(action.type){
        case 'addOne':
            return {cnt: state.cnt + 1};
        case 'reduceOne':
            return {cnt: state.cnt - 1};
        default:
            return state;
    }
}