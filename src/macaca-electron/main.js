/**
 *  Created by cl on 2018/7/25
 */

const {app, BrowserWindow, ipcMain, Tray, Menu, dialog,shell} = require('electron');

let mainWindow;
const winUrl = `http://localhost:9000`;
app.on('ready', async () => {
    mainWindow = new BrowserWindow({
        width: 660, height: 500,
        backgroundColor: '#ffd800',
        frame: false,
        // x:20, y:440,
        minWidth: 660,
        minHeight: 500,
        id:1,
        hasShadow:process.platform === 'darwin',
        fullscreenWindowTitle:process.platform === 'darwin'&&true,
        titleBarStyle:process.platform === 'darwin'&&'hiddenInset',
        fullscreenable:process.platform === 'darwin'&&false,
        maximizable:process.platform === 'darwin'&&false
        // resizable:false
    });

    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL(winUrl);
    app.on('before-quit', function() {
        console.log('quit');
    });
    mainWindow.webContents.on('did-finish-load', () => {
        console.log('did-finish-load');
    });

    //mac 点击 dock 时，打开主界面
    app.on('activate', () => {
        mainWindow.show();
    });

    app.emit('mainWindowDone', mainWindow);
});
app.on('window-all-closed',(e)=>{
    console.log('all');
});

app.on('gpu-process-crashed',(e,isCrash)=>{
    console.log('crash',isCrash)
    if(isCrash){
        app.quit()
    }
});
