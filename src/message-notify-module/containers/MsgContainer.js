
import React from 'react';
import {connect} from 'react-redux';
import MsgComponent from "../components/MsgComponent";

const mapStateToProps = (state, ownProps) => {
    return state.msgNotifyReducer;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onScrollToBottom: () => {
            // const scrollHeight = this.refs.scrollbars.getScrollHeight();
            // const clientHeight = this.refs.scrollbars.getClientHeight();
            // console.log(scrollHeight, clientHeight);
            dispatch({type: 'showLoading', showLoading: true});
            setTimeout(() => {
                dispatch({type: 'showLoading', showLoading: false});
            }, 5000);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgComponent)