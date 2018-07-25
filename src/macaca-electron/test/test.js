/**
 *  Created by cl on 2018/7/24
 */

const co = require('co');
const fs = require('fs');
const path = require('path');
const Electron = require('macaca-electron');

const electron = new Electron();

co(function *() {
    yield electron.startDevice({
        window: false // in silence
    });

    yield electron.maximize();
    yield electron.setWindowSize(null, 500, 500);
    yield electron.get('http://123.57.244.51');
    yield electron.get('http://123.57.244.51/auth');
    const imgData = yield electron.getScreenshot();
    const img = new Buffer(imgData, 'base64');
    const p = path.join(__dirname, '../generate-imgs', 'url-test-screenshot.png');
    fs.writeFileSync(p, img.toString('binary'), 'binary');
    console.log(`screenshot: ${p}`);

    yield electron.stopDevice();
});