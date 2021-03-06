/**
 *  Created by cl on 2018/7/24
 */

'use strict';

require('../main.js');

const fs = require('fs');
const path = require('path');
const {
    app,
    ipcMain,
    BrowserWindow,
    session
} = require('electron');

app.on('mainWindowDone', mainWindow => {

    const _ = require('macaca-electron/lib/helper');
    // const logger = require('macaca-electron/lib/logger');
    const log = console;

    const pkg = require('macaca-electron/package');

    // let mainWindow = null;
    // log.log(`------->${global.globalObj.mainWindow}`);
    // if(global.globalObj.mainWindow){
    //     mainWindow = global.globalObj.mainWindow;
    // }else{
    //     app.on('ready', data => {
    //         mainWindow = new BrowserWindow(_.merge(defaultOptions, args));
    //         mainWindow.on('closed', () => {
    //             mainWindow = null;
    //         });
    //         mainWindow.webContents.setAudioMuted(true);
    //     });
    // }


    const args = JSON.parse(process.argv[process.argv.length - 1]);

    if (args.show === false && app.dock) {
        app.dock.hide();
    }

// force dpr=1
    if (args.hidpi === false) {
        app.commandLine.appendSwitch('force-device-scale-factor', 1);
    }

    ipcMain.on('ipc', (event, arg) => {
        const data = arg.data;
        switch (arg.action) {
            case 'screenshot':
                mainWindow.capturePage(image => {
                    let data = image.toDataURL();
                    let base64 = data.split(',')[1];
                    const img = new Buffer(base64, 'base64');
                    let dir = path.join(process.cwd(), data.dir);
                    _.mkdir(path.dirname(dir));
                    fs.writeFileSync(dir, img.toString('binary'), 'binary');
                });
                break;
            case 'exit':
                app.quit();

                process.exit(data.failedCount ? 1 : 0);
                break;
        }
    });

    process.on('uncaughtException', function(e) {
        log.log(e.stack);
    });

    const wrapElectronResult = (value, status, message) => {
        status = status || 0;
        value = value || null;

        return {
            value,
            status,
            message
        };
    };

    const messageHandlers = {
        get(args, data) {
            mainWindow.webContents.loadURL(args.url, {
                extraHeaders: args.args.raHeaders || {},
                userAgent: args.args.userAgent || pkg.description
            });
            mainWindow.webContents.once('did-finish-load', data => {
                log.log('window has been loaded.');
                process.send(wrapElectronResult());
            });
        },

        js(args, data) {
            mainWindow.webContents.executeJavaScript(args, result => {
                process.send(result);
            });
        },

        getWindows(args, data) {
            const windows = BrowserWindow.getAllWindows();
            const windowHandlers = windows.map(win => win.id).sort();
            process.send(wrapElectronResult(windowHandlers));
        },

        setWindow(id) {
            let window;
            try {
                window = BrowserWindow.fromId(id);
                if (!window) {
                    throw 'No window found';
                }
            } catch (e) {
                process.send(wrapElectronResult(null, 23));
                return;
            }

            window.focus();
            mainWindow = window;
            process.send(wrapElectronResult());
        },

        setWindowSize(args, data) {
            // TODO by windowHandle
            mainWindow.setSize(args.width, args.height);
            process.send(wrapElectronResult());
        },

        getWindowSize() {
            const size = mainWindow.getSize();
            process.send(wrapElectronResult({
                width: size[0],
                height: size[1]
            }));
        },

        maximize(args, data) {
            mainWindow.maximize();
            process.send(wrapElectronResult());
        },

        getAllCookies() {
            session.defaultSession.cookies.get({}, (error, cookies) => {
                if (error) {
                    process.send(wrapElectronResult(null, error));
                    return;
                }
                process.send(wrapElectronResult(cookies));
            });
        },

        getNamedCookie(name) {
            session.defaultSession.cookies.get({}, (error, cookies) => {
                if (error) {
                    process.send(wrapElectronResult(null, error));
                    return;
                }
                let cookie = _.filter(cookies, item => item.name === name);
                process.send(wrapElectronResult(cookie));
            });
        },

        addCookie(cookie) {
            session.defaultSession.cookies.set(cookie, (error) => {
                if (error) {
                    process.send(wrapElectronResult(null, error));
                    return;
                }
                process.send(wrapElectronResult(cookie));
            });
        },

        deleteCookie(name) {
            session.defaultSession.clearStorageData(() => {
                process.send(wrapElectronResult(null));
            });
        },

        deleteAllCookies() {
            session.defaultSession.clearStorageData(() => {
                process.send(wrapElectronResult(null));
            });
        },

        getScreenshot(args, data) {
            mainWindow.capturePage((image) => {
                let data = image.toDataURL();
                let base64 = data.split(',')[1];
                process.send(wrapElectronResult(base64));
            });
        },

        url() {
            process.send(wrapElectronResult(mainWindow.webContents.getURL()));
        }
    };

    process.on('message', data => {
        const action = data.action;
        const handler = messageHandlers[action];
        if (handler) {
            handler(data.args, data);
        } else {
            log.log('Unknown Action', data.action);
        }
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    const defaultOptions = {
        show: true,
        alwaysOnTop: false,
        x: 0,
        y: 0,
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false,
            allowRunningInsecureContent: true,
            allowDisplayingInsecureContent: true,
            backgroundThrottling: false
        }
    };

    app.on('certificate-error', (e, webContents, url, error, certificate, callback) => {
        e.preventDefault();
        callback(true);
    });

});
