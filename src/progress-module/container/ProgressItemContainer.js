/**
 *  Created by cl on 2018/5/17
 */

import {connect} from 'react-redux';

import ProgressItemComponent from '../component/ProgressItemComponent';

const mapStateToProps = (state, ownProps) => {
    return ownProps;
};

const mapDispatchToProps = (dispatch) => {
    return {
        reRender: (task) => dispatch({type: 'progress-item-reRender', task}),
        remove: (task) => dispatch({type: 'progress-item-remove', task}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressItemComponent);
