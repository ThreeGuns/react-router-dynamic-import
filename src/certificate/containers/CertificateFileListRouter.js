import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'antd';


import folderPng from '../../images/icon-folder.png';
import deletePng from '../../images/icon-delete.png';
import downloadPng from '../../images/download.png';
import uploadPng from '../../images/upload.png';
import closePng from '../../images/closed.png';
import xlsPng from '../../images/file_icon/xls.png';

class CertificateFileListRouter extends Component {

    constructor(){
        super();
        this.downloadFileListTemplateWithCurrentFileList = this.downloadFileListTemplateWithCurrentFileList.bind(this);
        this.uploadFileListTemplate = this.uploadFileListTemplate.bind(this);
    }

    componentDidMount(){
        const navbar = [
            {
                pathName: '权利人信息',
                path: '/certificate/CertificateWriteInfoRouter'
            },
            {
                pathName: '文件列表',
                path: '/certificate/CertificateFileListRouter'
            }
        ];
        const {changeNav} = this.props;
        changeNav(navbar);
    }

    downloadFileListTemplateWithCurrentFileList(){
        const {fileListDataSource} = this.props;

        const templateOutputFilePath = os.tmpdir()+new Date().getTime()+'.xlsx';

        const data = fileListDataSource.map(oneFile => {
            const arrType = [];
                arrType.push(oneFile.key);
                arrType.push(oneFile.workName);
                arrType.push(oneFile.workType);
                arrType.push(oneFile.creationPlace);
                arrType.push(oneFile.creationTime);
                arrType.push(oneFile.publishStatus);
                arrType.push(oneFile.firstPublishTime);
                arrType.push(oneFile.firstPublishPlace);
                arrType.push(oneFile.firstPublishUrl);
            return arrType;
        });
        this.xls.generateXlsx(data, templateOutputFilePath);
        console.log(templateOutputFilePath);
    }

    uploadFileListTemplate(chooseFile){
        const {supplementFileList} = this.props;
        const xlsxData = this.xls.exportData(chooseFile.path);

        supplementFileList(xlsxData);
    }

    render() {
        const {history, fileListSupplement, showSupplement, hideSupplement, fileListDataSource,
            addFile, removeFile} = this.props;
        const columns = [
            {key: 'workName', dataIndex: 'workName', title: '作品'},
            {key: 'fileSize', dataIndex: 'fileSize', title: '文件大小'},
            {key: 'creationTime', dataIndex: 'creationTime', title: '创作完成时间'},
            {key: 'creationPlace', dataIndex: 'creationPlace', title: '创作完成地点'},
            {key: 'publishStatus', dataIndex: 'publishStatus', title: '发表状态'},
            {key: 'others', dataIndex: 'others', title: '其他'},
            {key: 'actions', dataIndex: 'actions', title: '', render: (text, record) => {
                    return (
                        <span className="work-operate">
                            <a className="certificate-file-action"><img src={folderPng}/></a>
                            <span className="ant-divider"></span>
                            <a className="certificate-file-action"><img src={deletePng} onClick={() => {
                                removeFile(record);
                            }}/></a>
                        </span>
                    );
                }},
        ];
        return (
            <div className="file-list text-center">
                <div className="file-list-content">
                    <Table columns={columns} dataSource={fileListDataSource} pagination={false}></Table>
                </div>
                <div className="file-list-bottom">
                    <div className="left">
                        <span className="pre" onClick={() => {history.push('/certificate/CertificateWriteInfoRouter')}}>&lt;&nbsp;上一步</span>
                    </div>
                    <div className="center">
                        <div className="border-region">
                            <div className="show-to-user-region">
                                <img src={uploadPng}/><span>选择作品</span>
                            </div>
                            <input type="file" onChange={(e) => {
                                addFile(e.currentTarget.files[0]);
                            }}/>
                        </div>
                    </div>
                    <div className="right">
                        <a className="add-supplement" onClick={showSupplement}>补充存证信息</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn primary" onClick={() => {history.push('/certificate/CertificateMissionRouter')}}>直接提交</button>
                    </div>
                </div>
                <div className="certificate-supplement" style={{display: fileListSupplement.visible ? 'block' : 'none'}}>
                    <div className="mask">
                        <div className="certificate-supplement-content">
                            <img className="action-close" src={closePng} onClick={hideSupplement}/>
                            <div className="certificate-supplement-body">
                                <h5>补充存证信息</h5>
                                <div className="certificate-supplement-body-item text-left">
                                    <img src={xlsPng}/>
                                    <span className="download-template-link" onClick={this.downloadFileListTemplateWithCurrentFileList}>
                                        <img src={downloadPng}/>
                                        <a>存证信息表格下载</a>
                                    </span>
                                </div>
                                <div className="certificate-supplement-body-item describe text-left">
                                    请下载存证信息表格，并在表格中填写相应的信息，填写完成后，点击下方按钮上传
                                </div>
                                <div className="certificate-supplement-body-item upload-region">
                                    <img src={uploadPng}/>
                                    上传存证信息表格
                                    <input type="file" ref="uploadInput" onChange={(e) => {
                                        this.uploadFileListTemplate(e.currentTarget.files[0]);
                                        this.refs.uploadInput.value = '';
                                    }}/>
                                </div>
                                <p/>
                                <div className="certificate-supplement-body-item">
                                    <button className="btn primary">提交</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.certificateReduce;
};

const mapDispatchToProps = dispatch => {
    return {
        changeNav: (navbar) => {
            dispatch({type: 'changeNav', navbar});
        },
        showSupplement: () => {
            dispatch({type: 'toggleSupplement', visible: true});
        },
        hideSupplement: () => {
            dispatch({type: 'toggleSupplement', visible: false});
        },
        supplementFileList: (xlsxData) => {
            dispatch({type: 'supplementFileList', xlsxData});
        },
        addFile: (chooseFile) => {
            dispatch({type: 'addFile', chooseFile});
        },
        removeFile: (chooseFile) => {
            dispatch({type: 'removeFile', chooseFile});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateFileListRouter);
