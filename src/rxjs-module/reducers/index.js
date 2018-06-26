/**
 *  Created by cl on 2018/6/13
 */

export default {
    test: (store = {}, action) => {
        switch(action.type){
            default:
                return store;
        }
    }
};