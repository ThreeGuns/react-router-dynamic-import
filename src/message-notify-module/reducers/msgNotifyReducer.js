/**
 *  Created by cl on 2018/7/19
 */


const msgNotifyReducer = (state = {
    showLoading: false,
    showMsgs: true,
    msgs: [
        {
            id: 1,
            message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
            title: '审核通过',
            time: '9月15日 20:10',
            read: false
        },
        {
            id: 2,
            message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
            title: '审核通过',
            time: '9月15日 20:10',
            read: false
        },
        {
            id: 3,
            message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
            title: '审核通过',
            time: '9月15日 20:10',
            read: true
        },
        {
            id: 4,
            message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
            title: '审核通过',
            time: '9月15日 20:10',
            read: true
        },
        {
            id: 5,
            message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
            title: '审核通过',
            time: '9月15日 20:10',
            read: true
        },
        {
            id: 6,
            message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
            title: '审核通过',
            time: '9月15日 20:10',
            read: true
        }
    ]
}, action) => {
    switch (action.type) {
        case 'msgNotifyReducer':
            return state;
        case 'showLoading':
            state.msgs.push({
                id: Date.now(),
                message: '信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1信息1',
                title: '审核通过',
                time: '9月15日 20:10',
                read: false
            });
            return Object.assign({}, state, {showLoading: action.showLoading});
        default:
            return state;
    }
};
export default msgNotifyReducer;