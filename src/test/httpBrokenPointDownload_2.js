/**
 *  Created by cl on 2018/5/28
 */

//测试http断点下载
const http = require('http');
const fs = require('fs');
const os = require('os');

const filePath = os.tmpdir()+new Date().getTime()+'.jpg';

const brokenPointDownload = (opts, cb) => {
    let range = 'bytes=';
    if(opts.begin >= 0){
        range += ((opts.begin || 0) +'-');
    }
    range += (opts.end || '');
    const client = http.get({
        protocol: 'http:',
        host: '123.57.244.51',
        port: 80,
        method: 'GET',
        path: '/images/pub_0.jpg',
        headers: {
            'Content-Type': 'application/octet-stream',
            Range: range,
        },
    }, (res) => {
        //console.log(`content length is ${res.headers['content-length']}`);
        //console.log(`response status is ${res.statusCode}`);
        if(res.statusCode >= 400){
            return console.error(res.statusCode);
        }

        const flag = fs.existsSync(filePath) ? 'a' : 'w';
        const ws = fs.createWriteStream(filePath, {
            flags: flag,
            autoClose: true
        });
        ws.on('close', () => {
            cb();
        });
        res.pipe(ws);
        let chunk = '';
        res.on('data', (data) => {
            chunk += data;
        });
        res.on('end', () => {
            ws.end();
        });
    });
};

brokenPointDownload({
    begin: 0,
    end: 12345
}, () => {
    const currFileLength = fs.statSync(filePath).size;
    console.log(`after first download the file size is ${currFileLength}`);
    brokenPointDownload({
        begin: currFileLength,
        end: 20000,
    }, () => {
        console.log(`after second download the file size is ${fs.statSync(filePath).size}`);
        brokenPointDownload({
            begin: fs.statSync(filePath).size,
        }, () => {
            console.log(`after third download the file size is ${fs.statSync(filePath).size}`);
        })
    });
});