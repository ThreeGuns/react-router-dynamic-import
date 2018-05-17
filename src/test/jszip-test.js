/**
 *  Created by cl on 2018/5/14
 */

const fs = require('fs');
const JSZip = require('jszip');

const zip = new JSZip();
zip.file('hello.txt', 'xxxxxxxx');
zip.generateNodeStream({type:'nodebuffer',streamFiles:true}).pipe(fs.createWriteStream('out.zip'))
.on('finish', function () {
    // JSZip generates a readable stream with a "end" event,
    // but is piped here in a writable stream which emits a "finish" event.
    console.log("out.zip written.");
});


