/**
 *  Created by cl on 2018/5/23
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import navHomePng from '../../images/nav-home.png';

class CertificateNavbarComponent extends Component{

    render(){
        const {navbar} = this.props;
        const navbarElements = navbar.map((oneNav, index) => {
            return (
                <div key={index} className="oneNav">
                    <i>&nbsp;&gt;&nbsp;</i>
                    <Link to={oneNav.path}>{oneNav.pathName}</Link>
                </div>
            );
        });
        return (
            <div className="navbar">
                <div className="left">
                    <div className="oneNav homeNav">
                        <i><img src={navHomePng}/></i>
                        <Link to='/certificate/CertificateTipRouter'>批量版权存证</Link>
                    </div>
                    {navbarElements}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return state.certificateReduce;
};

export default connect(mapStateToProps, () => ({}))(CertificateNavbarComponent);