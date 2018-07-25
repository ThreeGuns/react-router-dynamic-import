/**
 *  Created by cl on 2018/7/25
 */

const co = require('co');
const fs = require('fs');
const path = require('path');
const BqjElectron = require('./lib/BqjElectron');

const electron = new BqjElectron('--banquanjiadebug');

function delay(fn, ms){
    return new Promise((res, rej) => {
        setTimeout(() => {
            fn();
            res();
        }, ms);
    });
}

function* generateImg(pngName){
    const imgData = yield electron.getScreenshot();
    const img = new Buffer(imgData, 'base64');
    const p = path.join(__dirname, './generate-imgs', pngName+'.png');
    fs.writeFileSync(p, img.toString('binary'), 'binary');
    console.log(`screenshot: ${p}`);
    return Promise.resolve();
}

co(function *() {
    yield electron.startDevice(this.args);

    // yield electron.maximize();
    // yield electron.setWindowSize(null, 500, 500);
    // yield electron.get('http://123.57.244.51');
    // yield electron.get('http://123.57.244.51/auth');
    // yield electron.send('electron', '../../app/main.js');
    // yield delay(() => {});
    // const mobileInput = yield electron.findElement('id', 'mobile');
    // const passwordInput = yield electron.findElement('id', 'password');
    // const submit = yield electron.findElement('id', 'login-submit');
    // yield electron.clearText(mobileInput.ELEMENT);
    // yield electron.setValue(mobileInput.ELEMENT, '13146670779');
    // yield electron.clearText(passwordInput.ELEMENT);
    // yield electron.setValue(passwordInput.ELEMENT, '111111q');
    //
    // const imgData1 = yield electron.getScreenshot();
    // const img1 = new Buffer(imgData1, 'base64');
    // const p1 = path.join(__dirname, '..', 'login-page.png');
    // fs.writeFileSync(p1, img1.toString('binary'), 'binary');
    //
    // // yield delay(() => {});
    // yield electron.click(submit.ELEMENT);
    //
    // yield delay(() => {});

    // yield delay(() => {}, 10000);
    const progressModule = yield electron.findElement('id', 'progress-module');
    yield electron.click(progressModule.ELEMENT);
    yield delay(() => {}, 2000);
    yield generateImg('progress-module');
    const messageNotifyModuleALink = yield electron.findElement('id', 'message-notify-module');
    yield electron.click(messageNotifyModuleALink.ELEMENT);
    yield delay(() => {}, 2000);
    yield generateImg('message-notify-module');

    yield electron.stopDevice();
});