import React, {Component} from 'react';
import {connect} from 'react-redux';

import checkedPng from '../../images/checked.png';
import uncheckedPng from '../../images/unchecked.png';
import uploadPng from '../../images/upload.png';
import closedPng from '../../images/closed.png';

class CertificateWriteInfoComponent extends Component {

    constructor(){
        super();
        this.pre = this.pre.bind(this);
        this.next = this.next.bind(this);
        this.generateObligeeElements = this.generateObligeeElements.bind(this);
        this.generateProofDocumentElements = this.generateProofDocumentElements.bind(this);
    }

    componentDidMount(){
        const {changeNav} = this.props;
        changeNav([
            {
                pathName: '权利人信息',
                path: '/certificate/CertificateWriteInfoRouter',
            }
        ]);
    }

    pre(){
        const {history} = this.props;
        history.push('/certificate/CertificateTipRouter');
    }

    next(){
        const {history} = this.props;
        history.push('/certificate/CertificateFileListRouter');
    }

    generateObligeeElements(){
        const {obligees, changeObligee} = this.props;
        const obligeesElements = obligees.map((oneObligee, index) => {
            return (
                <div key={index} className="obligee-list-item">
                    <div className="col1">{oneObligee.name}</div>
                    <div className="col2">
                        <img src={oneObligee.chooseAsAuthor ? checkedPng : uncheckedPng} onClick={
                            () => {
                                changeObligee(Object.assign({}, oneObligee, {chooseAsAuthor: !oneObligee.chooseAsAuthor}));
                            }
                        }/>
                    </div>
                    <div className="col3">
                        <img src={oneObligee.chooseAsComposer ? checkedPng : uncheckedPng} onClick={
                            () => {
                                changeObligee(Object.assign({}, oneObligee, {chooseAsComposer: !oneObligee.chooseAsComposer}));
                            }
                        }/>
                    </div>
                </div>
            );
        });
        return obligeesElements;
    }

    generateProofDocumentElements(){
        const {proofDocuments, removeProofDocument} = this.props;
        const proofDocumentElements = proofDocuments.map((oneProofDocument, index) => {
            return (
                <div key={index} className="item one-proof-document-content">
                    <label>{oneProofDocument.name}</label>
                    <img src={closedPng} onClick={() => {removeProofDocument(oneProofDocument)}}/>
                </div>
            );
        });
        return proofDocumentElements;
    }

    render() {
        const {addProofDocument} = this.props;
        const obligeeElements = this.generateObligeeElements();
        const proofDocumentElements = this.generateProofDocumentElements();
        return (
            <div className="write-info">
                <div className="info-content">
                    <h3 className="text-center">请先填写以下信息</h3>
                    <div className="subItem obligee">
                        <label className="required title">权利人：</label>
                        <div className="obligee-content">
                            <div className="obligee-list">
                                <div className="obligee-list-head">
                                    <div className="col1">权利人</div>
                                    <div className="col2">作者</div>
                                    <div className="col3">著作人</div>
                                </div>
                                {obligeeElements}
                            </div>
                            <div className="add-obligee">
                                <button className="btn primary">添加权利人</button>
                                <label>（要求作品所述作者、著作权人均一致）</label>
                            </div>
                        </div>
                    </div>
                    <div className="subItem explain">
                        <label className="title">授权说明：</label>
                        <textarea rows={3} placeholder="未经合法授权，任何单位和个人不得进行不知、转载、改编或其他侵权行为"></textarea>
                    </div>
                    <div className="subItem proof-document">
                        <label className="title">证明文件：</label>
                        <div className="proof-document-body">
                            <div className="proof-document-content">
                                <div className="item upload-action">
                                    <img src={uploadPng}/>
                                    <label>上传证明文件</label>
                                    <input type="file" text="上传证明文件" onChange={(e) => {
                                        addProofDocument(e.currentTarget.files[0]);
                                    }}/>
                                </div>
                                {proofDocumentElements}
                            </div>
                            <p>
                                （合作、委托、职务创作协议/取证文件/肖像权授权文件）
                            </p>
                        </div>
                    </div>
                </div>
                <div className="info-action">
                    <button className="btn primary" onClick={this.pre}>上一步</button>
                    <button className="btn primary" onClick={this.next}>下一步</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.certificateReduce;
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeNav: (navbar) => {
            dispatch({type: 'changeNav', navbar});
        },
        changeObligee: (obligee) => {
            dispatch({type: 'changeObligee', obligee});
        },
        addObligee: (newObligee) => {
            dispatch({type: 'addObligee', newObligee});
        },
        removeProofDocument: (proofDocument) => {
            dispatch({type: 'removeProofDocument', proofDocument});
        },
        addProofDocument: (proofDocument) => {
            dispatch({type: 'addProofDocument', proofDocument});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateWriteInfoComponent);
