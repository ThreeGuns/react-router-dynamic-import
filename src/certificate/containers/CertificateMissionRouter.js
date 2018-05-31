import React, {Component} from 'react';
import {connect} from 'react-redux';

import docPng from '../../images/file_icon/doc.png';
import pausePng from '../../images/download-pause.png';
import continuePng from '../../images/download-continue.png';
import folderPng from '../../images/icon-folder.png';
import deletePng from '../../images/icon-delete.png';
import successPng from '../../images/set-success.png';
import errorPng from '../../images/wrong_psd_login.png';

import CertificateFooterContainer from './CertificateFooterContainer';

class CertificateMissionRouter extends Component {

    componentDidMount(){
        const {changeNav} = this.props;
        const navbar = [
            {
                pathName: '权利人信息',
                path: '/home/certificate/certificateWriteInfo'
            },
            {
                pathName: '文件列表',
                path: '/home/certificate/certificateList'
            },
            {
                pathName: '存证进度',
                path: '/home/certificate/certificateMissionRoute'
            },
        ];
        changeNav(navbar);
    }

    generateTabs(){
        const {tabs, certificating, certificateDone, certificateFail, changeTab} = this.props;
        let selectedTab = {};
        const tabElements = tabs.map((oneTab, index) => {
            const {icon, title, selected} = oneTab;
            selected ? selectedTab = oneTab : void 0;
            return (
                <div key={index} className={`tab ${selected ? 'selected' : ''}`} onClick={() => changeTab(oneTab)}>
                    <div className="content">
                        <img src={icon}/>
                        <label className="label">{title}</label>
                        {
                            title === '正在存证' ? <label className="running-task-number">{certificating.length}</label> : void 0
                        }
                    </div>
                </div>
            );
        });
        return {
            selectedTab,
            tabElements
        };

    }

    generateCertificatingElement(){
        const {tabs, certificating, certificateDone, certificateFail} = this.props;
        const certificatingElements = certificating.map((oneCertificating, index) => {
            const {fileType, fileName, currentLength, totalLength, pause} = oneCertificating;
            const percent = parseInt(currentLength * 100 / totalLength);
            const propsInfo = pause ? '等待开始' : '正在存证，请稍后';
            return (
                <div key={index} className="item">
                    <div className="vertical-middle">
                        <div className="col1">
                            <img src={docPng} className="margin-left-20"/>
                            <label className="name margin-left-10">{fileName}</label>
                        </div>
                        <div className="col2">
                            <label className="current-amount-and-total">{`${currentLength}/${totalLength}`}</label>
                        </div>
                        <div className="col3">
                            <div className="one-progress-bar-outer">
                                <div className="one-progress-bar-inner" style={{width: `${percent}%`}}></div>
                            </div>
                            <div className="one-progress-bar-info"><label>{propsInfo}</label></div>
                        </div>
                        <div className="col4">
                            <div className="actions">
                                <img src={pause ? continuePng : pausePng}/>
                                <img src={folderPng}/>
                                <img src={deletePng}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="certificate-mission-list">
                <div className="certificate-mission-list-header">
                    <div className="vertical-middle">
                        <label className="margin-left-20">版权存证总进度</label>
                        <div className="total-progress-bar-outer margin-left-10">
                            <div className="total-progress-bar-inner" style={{width: '30%'}}></div>
                        </div>
                        <label className="margin-left-10">已完成4个，共20个</label>
                        <div className="certificating-total-action">
                            <button className="btn primary margin-left-20">全部暂停</button>
                            <button className="btn primary margin-left-10">全部取消</button>
                        </div>
                    </div>
                </div>
                <div className="certificate-mission-list-content">
                    <div className="list">
                        {certificatingElements}
                    </div>
                </div>
            </div>
        );
    }

    generateCertificateDoneElement(){
        const {tabs, certificating, certificateDone, certificateFail} = this.props;
        const certificateDoneElements = certificateDone.map((oneCertificateDone, index) => {
            const {fileType, fileName, currentLength, totalLength, certificateDate} = oneCertificateDone;
            return (
                <div key={index} className="item">
                    <div className="vertical-middle">
                        <div className="col1">
                            <img src={docPng} className="margin-left-20"/>
                            <label className="name margin-left-10">{fileName}</label>
                        </div>
                        <div className="col2">
                            <label className="current-amount-and-total">{certificateDate}</label>
                        </div>
                        <div className="col3">
                            <img src={successPng}/><label>存证完成</label>
                        </div>
                        <div className="col4">
                            <div className="actions">
                                <img src={deletePng}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="certificate-mission-list">
                <div className="certificate-mission-list-header">
                    <div className="vertical-middle">
                        <label className="margin-left-20">共{certificateDone.length}个作品</label>
                        <button className="btn primary done-clear-btn">全部取消</button>
                    </div>
                </div>
                <div className="certificate-mission-list-content">
                    <div className="list">
                        {certificateDoneElements}
                    </div>
                </div>
            </div>
        );
    }

    generateCertificateFailElement(){
        const {tabs, certificating, certificateDone, certificateFail} = this.props;
        const certificateFailElements = certificateFail.map((oneCertificateFail, index) => {
            const {fileType, fileName, currentLength, totalLength, certificateDate, errMsg} = oneCertificateFail;
            return (
                <div key={index} className="item">
                    <div className="vertical-middle">
                        <div className="col1">
                            <img src={docPng} className="margin-left-20"/>
                            <label className="name margin-left-10">{fileName}</label>
                        </div>
                        <div className="col2">
                            <label className="current-amount-and-total">{certificateDate}</label>
                        </div>
                        <div className="col3">
                            <img src={errorPng}/><label>{errMsg}</label>
                        </div>
                        <div className="col4">
                            <div className="actions">
                                <img src={deletePng}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="certificate-mission-list">
                <div className="certificate-mission-list-header">
                    <div className="vertical-middle">
                        <div className="margin-left-20 certificate-fail-tips">
                            <label>共{certificateFail.length}个作品</label>
                            <div className="certificate-fail-tips-action">
                                <a>重新提交失败文件</a>
                            </div>
                        </div>
                        <button className="btn primary fail-clear-btn">清除所有记录</button>
                    </div>
                </div>
                <div className="certificate-mission-list-content">
                    <div className="list">
                        {certificateFailElements}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {match} = this.props;
        const {selectedTab, tabElements} = this.generateTabs();
        let centerElement;
        switch(selectedTab.title){
            case '正在存证':
                centerElement = this.generateCertificatingElement();
                break;
            case '存证完成':
                centerElement = this.generateCertificateDoneElement();
                break;
            case '存证失败':
                centerElement = this.generateCertificateFailElement();
                break;
            default:
                centerElement = this.generateCertificatingElement();
                break;
        }

        return (
            <div className="mission">
                <div className="left">
                    {tabElements}
                    <div className="info-link"><a>版权存证介绍</a></div>
                </div>
                <div className="center">
                    {centerElement}
                </div>
                <CertificateFooterContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state.certificateReduce;
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (data) => {
            dispatch({type: 'changeTab', data});
        },
        changeNav: (navbar) => {
            dispatch({type: 'changeNav', navbar});
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateMissionRouter);
