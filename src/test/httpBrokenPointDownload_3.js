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
    http.get({
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
        if(res.statusCode >= 400){
            return console.error(res.statusCode);
        }
        const ws = fs.createWriteStream(filePath, {
            flags: fs.existsSync(filePath) ? 'a' : 'w',
            autoClose: true
        });
        ws.on('finish', cb);
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
//分三次下载文件
brokenPointDownload({
    begin: 0,
    end: 12345
}, () => {
    let currFileLength = fs.statSync(filePath).size;
    console.log(`after first download the file size is ${currFileLength}`);
    brokenPointDownload({
        begin: currFileLength,
        end: 20000,
    }, () => {
        currFileLength = fs.statSync(filePath).size;
        console.log(`after second download the file size is ${currFileLength}`);
        brokenPointDownload({
            begin: fs.statSync(filePath).size,
        }, () => {
            currFileLength = fs.statSync(filePath).size;
            console.log(`after third download the file size is ${currFileLength}`);
        })
    });
});