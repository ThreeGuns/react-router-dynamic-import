/**
 * Create by cl on 2018/6/22
 */

import React from 'react';
import {connect} from 'react-redux';

class FooterContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {click} = this.props;
        return(
            <div>
                <a id="footer-a" onClick={click}>click footer to back</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.footerReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        click: (data) => {
            dispatch({type: 'footer-click', data});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);