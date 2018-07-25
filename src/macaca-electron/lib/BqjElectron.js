/**
 *  Created by cl on 2018/7/25
 */


const Electron = require('macaca-electron');
const IPC = require('./IPC');

class BqjElectron extends Electron{
    constructor(args){
        super();
        this.args = args;
        this.ipc = new IPC(this.args);
    }
}

module.exports = BqjElectron;