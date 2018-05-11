/**
 *  Created by cl on 2018/5/11
 */
const str = {
    "modifyTimes": 1,
    "createBeginDate": "2018-05-10 18:57:13",
    "createEndDate": "2018-05-10 18:57:13",
    "evidenceName": "啊啊啊啊啊",
    "filesVersionList": [{
        "eventId": "1677",
        "userId": "137949",
        "workId": "",
        "evidenceSummary": "北京版权家科技发展有限公司(统一社会信用代码：91110113MA0076YJ39,账户：WWWGTWCY)于2018-05-10 18:57:13(UTC/GMT+08:00) 创建了文件：使用帮助的副本 2.html",
        "summaryHash": "abcbe39ea35d7e67b4d90ece87e3d602dee2b3bf5f3eca43496f9a3ba8c20038",
        "fileHash": "609c640fd6da33275987acdc6d17dc6904243d127251f1a56ec562f807afd9bb",
        "gitVersion": "2bcc3b95e91740c756684962ea384d8484c8d898",
        "evidenceId": "",
        "eventDate": "2018-05-10 18:57:13",
        "fileName": "使用帮助的副本 2.html",
        "workName": "使用帮助的副本 2",
        "localPath": "/Users/mycomputer/版权家/137949/我的创作/使用帮助的副本 2.html",
        "gitPath": "使用帮助的副本 2.html",
        "optType": 3,
        "blockChainKey": "7007b6d2abaa77ce1341a2ca5fa1ddcc08353309bd6c20b39b0280d91d54bdba",
        "ext": "html"
    }],
    "name": "北京版权家科技发展有限公司",
    "account": "gaoyue@anne.com.cn",
    "identityNo": "91110113MA0076YJ39",
    "imgBase64": {"html": "data:image/png;base64,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"},
    "imgArr": [{"ext": "html"}],
    "imgPlaceholder": [],
    "staticCtx": "http://static.bqj.cn",
    "checkCtx": "http://testv.bqj.cn",
    "evidenceData": [{
        "eventId": "1666",
        "userId": "137949",
        "workId": "",
        "evidenceSummary": "用户gaoyue@anne.com.cn完成了\"版权家创作保护客户端\"的安装。详情如下：网络IP地址:192.168.68.152;操作系统：ProductName: Mac OS X ProductVersion: 10.12.6 BuildVersion: 16G29 ;设备序列号：CD6F4E7E-57A6-51CF-9B01-BEA78BAD1E6A;软件版本号：1.0.0.3;",
        "summaryHash": "ba380cc1a019736f68a28acd7d0b55a89b4da0f5dc481a13fddcc691f118b68a",
        "fileHash": "",
        "gitVersion": "",
        "evidenceId": "",
        "eventDate": "2018-05-10 18:03:34",
        "fileName": "",
        "workName": "",
        "localPath": "",
        "gitPath": "",
        "optType": 0,
        "blockChainKey": "39fb12ed777425fbcb5e2f067efa6613036e9ce44aacaad4041073ca20ca174e"
    }, {
        "eventId": "1672",
        "userId": "137949",
        "workId": "",
        "evidenceSummary": "用户使用17611591192手机号于2018-05-10 18:03:16（UTC/GMT+08:00）成功注册版权家账户17611591192",
        "summaryHash": "3f6473696b1832a82068f54ec814b4f8717532a257cb58e431ce565c136bc33e",
        "fileHash": "",
        "gitVersion": "",
        "evidenceId": "",
        "eventDate": "2018-05-10 18:41:12",
        "fileName": "",
        "workName": "",
        "localPath": "",
        "gitPath": "",
        "optType": 1,
        "blockChainKey": "855596a22290714dbbaa811520de9eb26b4fbd30c0daa7df5c37bc66791696a6"
    }, {
        "eventId": "1671",
        "userId": "137949",
        "workId": "",
        "evidenceSummary": "账户gaoyue@anne.com.cn于2018-05-10 18:05:39 (UTC/GMT+08:00) 完成实名认证",
        "summaryHash": "036d2d9497bb0242953f9f89a703c974300ad0e974c16bfdeb0b72668399854e",
        "fileHash": "",
        "gitVersion": "",
        "evidenceId": "",
        "eventDate": "",
        "fileName": "",
        "workName": "",
        "localPath": "",
        "gitPath": "",
        "optType": 2,
        "blockChainKey": ""
    }, {
        "eventId": "1677",
        "userId": "137949",
        "workId": "",
        "evidenceSummary": "北京版权家科技发展有限公司(统一社会信用代码：91110113MA0076YJ39,账户：WWWGTWCY)于2018-05-10 18:57:13(UTC/GMT+08:00) 创建了文件：使用帮助的副本 2.html",
        "summaryHash": "abcbe39ea35d7e67b4d90ece87e3d602dee2b3bf5f3eca43496f9a3ba8c20038",
        "fileHash": "609c640fd6da33275987acdc6d17dc6904243d127251f1a56ec562f807afd9bb",
        "gitVersion": "2bcc3b95e91740c756684962ea384d8484c8d898",
        "evidenceId": "",
        "eventDate": "2018-05-10 18:57:13",
        "fileName": "使用帮助的副本 2.html",
        "workName": "使用帮助的副本 2",
        "localPath": "/Users/mycomputer/版权家/137949/我的创作/使用帮助的副本 2.html",
        "gitPath": "使用帮助的副本 2.html",
        "optType": 3,
        "blockChainKey": "7007b6d2abaa77ce1341a2ca5fa1ddcc08353309bd6c20b39b0280d91d54bdba",
        "ext": "html"
    }, {
        "eventId": "1678",
        "userId": "137949",
        "workId": "",
        "evidenceSummary": "北京版权家科技发展有限公司(统一社会信用代码：91110113MA0076YJ39,账户：WWWGTWCY)于2018-05-10 18:58:01(UTC/GMT+08:00) 通过版权家创作保护软件将名为啊啊啊啊啊的作品提交并获得版权原创证书 (证书编号：98aec90e29ff414d8c2f4dcbb9cdc7ae)",
        "summaryHash": "d20bddb910a44d45adef2af34419e78d65bdc54ac8044e5a429ac46b5968e011",
        "fileHash": "77bdabe270570a364a3d`994b699949ed",
        "gitVersion": "",
        "evidenceId": "",
        "eventDate": "2018-05-10 18:58:01",
        "fileName": "",
        "workName": "",
        "localPath": "",
        "gitPath": "",
        "optType": 4,
        "blockChainKey": "0b8a0de4da38eaba8dccb163b6462632d4052caf25789206b30a0d24e919c8b4"
    }],
    "originalSignature": "WWWGTWCY",
    "pdf": {
        "code": "200",
        "message": "",
        "subCode": "",
        "subMsg": "",
        "pdfPath": "http://file.bqj.cn/file/71556f412f2a431ab86b0e106527e282.pdf",
        "pdfImagePath": "http://file.bqj.cn/file/5efe04aa338a43e084fd9ddb027f1e54.jpg"
    }
};

// const obj = JSON.parse(str);




const obj2 = {a: "aa\"a", b: "bbb"};
console.log(obj2.a);

const str2 = JSON.stringify(obj2);
console.log('--'+str2);
const str2_1 = str2;
const obj2_1 = JSON.parse(str2_1);
console.log(obj2_1);

let str3 = '{"a":"a\\""}';
console.log('--'+str3);
console.log(JSON.parse(JSON.stringify(JSON.parse(str3))));

// const obj3 = eval('('+str3+')');

// const obj22 = JSON.parse(str3);
//
// console.log(obj22.a);