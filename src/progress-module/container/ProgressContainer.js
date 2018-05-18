/**
 *  Created by cl on 2018/5/17
 */

import {connect} from 'react-redux';

import ProgressComponent from '../component/ProgressComponent';

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state.progressReducer, {initData: ownProps.initData});
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (initData) => dispatch({type: 'progress-init', initData}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressComponent);
