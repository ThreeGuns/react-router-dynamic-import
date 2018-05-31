/**
 *  Created by cl on 2018/5/22
 */

import uploadingPng from '../../images/certificate/uploading.png'
import uploadDownPng from '../../images/certificate/upload-done.png'
import uploadFailPng from '../../images/certificate/upload-fail.png'

const defaultState = {
    navbar: [
        /*{
            pathName: '版权存证',
            path: '/home/certificate'
        }*/
    ],
    //权利人
    obligees: [
        {
            name: '李小刚',
            chooseAsAuthor: true,
            chooseAsComposer: true,
        },
        {
            name: '北京版权家科技发展有限公司',
            chooseAsAuthor: false,
            chooseAsComposer: true,
        },
    ],
    //证明文件
    proofDocuments: [
        {
            name: '职务创作协议.doc',
            path: ''
        },
        {
            name: '北京故宫游览指南.doc',
            path: ''
        },
        {
            name: '北京市八大处景区游览游客18年5月16日处理张某某违反景区管理规章制度的决定，这里只是想写一个超长的标签，看他会换行不.doc',
            path: ''
        },
        {
            name: '职务创作协议.doc',
            path: ''
        },
        {
            name: '北京故宫游览指南.doc',
            path: ''
        },
    ],
    fileListDataSource: [
        {
            key: '/users/Desktop/文件1.png',
            filePath: '/users/Desktop/文件1.png',
            fileSize: 1028,
            fileType: 'image/png',
            others: '备注',
            fileName: '/users/Desktop/文件1.png',
            workName: '文件1',
            workType: '作品类型',
            creationPlace: '创作完成地点',
            creationTime: '创作完成时间',
            publishStatus: '发表状态',
            firstPublishTime: '首次发表时间',
            firstPublishPlace: '首次发表地址',
            firstPublishUrl: 'www.baidu.com',
        },
    ],
    //文件列表补充信息
    fileListSupplement: {
        visible: false,
    },
    //批量存证标签页
    tabs: [
        {
            icon: uploadingPng,
            title: '正在存证',
            selected: true,
        },
        {
            icon: uploadDownPng,
            title: '存证完成',
            selected: false,
        },
        {
            icon: uploadFailPng,
            title: '存证失败',
            selected: false,
        },
    ],
    //正在存证
    certificating: [
        {
            fileType: 'avi',
            fileName: '原创素材1',
            currentLength: 485,
            totalLength: 1024,
            pause: true,
        },
        {
            fileType: 'avi',
            fileName: '原创素材2',
            currentLength: 1000,
            totalLength: 1024,
            pause: false,
        },
        {
            fileType: 'avi',
            fileName: '原创素材2',
            currentLength: 1000,
            totalLength: 1024,
            pause: false,
        },
        {
            fileType: 'avi',
            fileName: '原创素材2',
            currentLength: 1000,
            totalLength: 1024,
            pause: false,
        },
        {
            fileType: 'avi',
            fileName: '原创素材2',
            currentLength: 1000,
            totalLength: 1024,
            pause: false,
        },
        {
            fileType: 'avi',
            fileName: '原创素材2',
            currentLength: 1000,
            totalLength: 1024,
            pause: false,
        },
        {
            fileType: 'avi',
            fileName: '原创素材2',
            currentLength: 200,
            totalLength: 1024,
            pause: false,
        }
    ],
    //存证完成
    certificateDone: [
        {
            fileType: 'png',
            fileName: '圆明园西洋镜图片1',
            currentLength: 10480000,
            totalLength: 20480000,
            certificateDate: '2018-05-05',
            pause: false,
        },
        {
            fileType: 'jpg',
            fileName: '圆明园西洋镜图片2',
            currentLength: 100000,
            totalLength: 10240000,
            certificateDate: '2018-05-05',
            pause: true,
        },
        {
            fileType: 'jpg',
            fileName: '圆明园西洋镜图片3',
            currentLength: 0,
            totalLength: 10240000,
            certificateDate: '2018-05-05',
            pause: true,
        }
    ],
    //存证失败
    certificateFail: [
        {
            fileType: 'png',
            fileName: '协和医院采购项目招标文件1',
            currentLength: 10,
            totalLength: 2048,
            certificateDate: '2018-05-05',
            errMsg: '存证失败，作品重复',
            pause: false,
        },
        {
            fileType: 'jpg',
            fileName: '协和医院采购项目招标文件2',
            currentLength: 1024,
            totalLength: 1024,
            certificateDate: '2018-05-05',
            errMsg: '存证失败，作品重复',
            pause: true,
        },
    ],
};

const addProofDocument = (proofDocuments, proofDocument) => {
    const newProofDocuments = [...proofDocuments];
    const {name, path} = proofDocument;
    newProofDocuments.push({name, path});
    return newProofDocuments;
};

const removeProofDocument = (proofDocuments, proofDocument) => {
    const newProofDocuments = [...proofDocuments];
    for(let i = 0; i < proofDocuments.length; i++){
        if(proofDocument.name === proofDocuments[i].name){
            newProofDocuments.splice(i, 1);
            break;
        }
    }
    return newProofDocuments;
};

export default (state = defaultState, action) => {
    const {proofDocuments} = state;
    switch(action.type){
        case 'changeObligee':
            const newObligee = action.obligee;
            const newObligees = state.obligees.map(oneObligee => {
                return oneObligee.name === newObligee.name ? newObligee : oneObligee;
            });
            return Object.assign({}, state, {obligees: newObligees});
        case 'removeProofDocument':
            return Object.assign({}, state, {proofDocuments: removeProofDocument(state.proofDocuments, action.proofDocument)});
        case 'addProofDocument':
            // state.proofDocuments.push({name: action.proofDocument.name});
            // return Object.assign({}, state);

            return Object.assign({}, state, {proofDocuments: addProofDocument(state.proofDocuments, action.proofDocument)});
            // return Object.assign(state, {proofDocuments: addProofDocument(state.proofDocuments, action.proofDocument) });
        case 'addFile':
            state.fileListDataSource.push({
                key: action.chooseFile.path,
                fileName: action.chooseFile.name,
                filePath: action.chooseFile.path,
                fileSize: action.chooseFile.size,
                fileType: action.chooseFile.type,
                workName: action.chooseFile.name,
            });
            return state;
        case 'removeFile':
            for(let i = 0; i < state.fileListDataSource.length; i++){
                if(state.fileListDataSource[i].key === action.chooseFile.key){
                    state.fileListDataSource.splice(i, 1);
                    break;
                }
            }
            return state;
        case 'supplementFileList':
            action.xlsxData.map(oneData => {
                for(let i = 0; i < state.fileListDataSource.length; i++){
                    if(state.fileListDataSource[i].key === oneData[0]){
                        Object.assign(state.fileListDataSource[i], {
                            fileName: oneData[0],
                            workName: oneData[1],
                            workType: oneData[2],
                            creationPlace: oneData[3],
                            creationTime: oneData[4],
                            publishStatus: oneData[5],
                            firstPublishTime: oneData[6],
                            firstPublishPlace: oneData[7],
                            firstPublishUrl: oneData[8],
                        });
                        break;
                    }
                }
            });
            return state;
        case 'toggleSupplement':
            state.fileListSupplement.visible = action.visible;
            return state;
        case 'changeNav':
            const newNav = action.navbar;
            return Object.assign({}, state, {navbar: newNav});
        case 'changeTab':
            const newTabs = state.tabs.map(oneTab => {
                let selected = false;
                if(oneTab.title === action.data.title){
                    selected = true;
                }
                return Object.assign({}, oneTab, {selected})
            });
            return Object.assign({}, state, {tabs: newTabs});
        default:
            return state;
    }
};