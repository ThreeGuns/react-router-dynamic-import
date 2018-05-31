import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import CertificateFooterContainer from './CertificateFooterContainer';

import playPng from '../../images/download-continue.png';

class CertificateTipRouter extends Component {

    componentDidMount(){
        const navbar = [];
        const {changeNav} = this.props;
        changeNav(navbar);
    }

    render() {
        return (
            <div className="tip">
                <div className="tip-content">
                    <h3 className="text-center">版权存证介绍</h3>
                    <h4>【版权存证介绍】</h4>
                    <p>
                        为已创作完成的作品，提供用于证明作品存在性和版权权属的版权存证证书。此证书可在国家授时中心可信时间服务、国家认可的数字证书签发机构、版权区块链公示网站、等第三方权威机构进行核验
                    </p>
                    <h4>【批量申请版权存证】</h4>
                    <div className="lis">
                        <ul>
                            <li>适用一次性提交大量作品</li>
                            <li>要求同一批次所有作品的作者和著作权人相同</li>
                        </ul>
                    </div>
                    <h4>【在线申请版权存证】</h4>
                    <div className="lis">
                        <ul>
                            <li>适用提交少量作品</li>
                            <li>适用作品文件较小的情况</li>
                        </ul>
                    </div>
                    <p>
                        <a>在线申请版权存证入口 >></a>
                    </p>

                    <div className="video-introduction">
                        <div className="video-introduction-action">
                            <img src={playPng}/>
                        </div>
                        <p className="text-center">视频介绍</p>
                    </div>
                </div>
                <CertificateFooterContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => {
    return {
        changeNav: (navbar) => {
            dispatch({type: 'changeNav', navbar});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateTipRouter);
