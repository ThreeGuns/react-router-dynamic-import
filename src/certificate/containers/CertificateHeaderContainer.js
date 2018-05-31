/**
 *  Created by cl on 2018/5/23
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import navHomePng from '../../images/nav-home.png';

class CertificateHeaderComponent extends Component{

    render(){

        return (
            <div className="header">

            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return state.certificateReduce;
};

export default connect(mapStateToProps, () => ({}))(CertificateHeaderComponent);