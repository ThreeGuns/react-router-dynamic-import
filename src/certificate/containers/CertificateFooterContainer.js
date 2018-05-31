/**
 *  Created by cl on 2018/5/23
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class CertificateFooterContainer extends Component{

    render(){
        const {history} = this.props;
        return (
            <div className="bottom">
                <div className="current-certificates">
                    <div><label>当前已获得版权存证证书</label><a>50</a><label>个，</label><a>去网站查看 >></a></div>
                    <button className="btn primary action-btn" onClick={() => history.push('/certificate/CertificateWriteInfoRouter')}>批量申请版权存证</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return state.certificateReduce;
};

export default connect(mapStateToProps, () => ({}))(withRouter(CertificateFooterContainer));