/**
 *  Created by cl on 2018/5/28
 */

//http断点下载
const http = require('http');
const fs = require('fs');

/*
* 一般情况下options只需要配置host和path
{
    host: 'www.baidu.com',
    path: '/images/pub_0.jpg',
}
*/
const brokenPointDownload = (options, outputFilePath) => {
    const defaultOptions = {
        protocol: 'http:',
        host: '123.57.244.51',
        port: 80,
        method: 'GET',
        path: '/images/pub_0.jpg',
        headers: {
            'Content-Type': 'application/octet-stream',
        },
    };
    let rangePrefix = 'bytes=', rangeRegion = '0-', flag = 'w';
    if(fs.existsSync(outputFilePath)){
        rangeRegion = fs.statSync(outputFilePath).size + '-';
        flag = 'a';
    }
    Object.assign(defaultOptions, {headers: {Range: rangePrefix+rangeRegion}});
    return new Promise((resolve, reject) => {
        const client = http.get(Object.assign({}, defaultOptions, options), (res) => {
            if(res.statusCode >= 400){
                return console.error(`brokenPointDownload statusCode error ${res.statusCode}`);
            }
            const ws = fs.createWriteStream(outputFilePath, {
                flags: flag,
                autoClose: true
            });
            ws.on('finish', () => {
                resolve(fs.statSync(outputFilePath).size);
            });
            res.pipe(ws);
            res.on('end', () => {
                ws.end();
            });
        });
        client.on('close', function(){
            console.log('brokenPointDownload connection closed');
        });
        client.on('error', err => {
            if(err.code === 'ECONNREFUSED'){
                console.error(`brokenPointDownload ECONNREFUSED ${err.stack}`);
            }else{
                console.error(`brokenPointDownload 无法连接到服务器 ${err.stack}`);
            }
            reject(err);
        });
    });
};

module.exports = brokenPointDownload;

/*//调用实例
brokenPointDownload({
    host: 'bqj.cn',
    path: '/api/test.pdf'
}).then(currentFileSize => {});*/

//断点下载验证(分两次下载同一个文件)
const host = '123.57.244.51';
const path = '/images/pub_0.jpg';
const outputFilePath = `/users/bqj/Desktop/${new Date().getTime()}.jpg`;
brokenPointDownload({host, path,headers: {Range: 'bytes=0-12345'}}, outputFilePath).then((fileCurrentSize) => {
    console.log(`fileCurrentSize --> ${fileCurrentSize}`);
    brokenPointDownload({host, path}, outputFilePath).then((fileCurrentSize) => {
        console.log(`fileCurrentSize --> ${fileCurrentSize}`);
        process.exit(0);
    });
});


