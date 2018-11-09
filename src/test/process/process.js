process.on('SIGINT', () => {
    console.log('Got SIGINT signal.');
});

setTimeout(() => {
    console.log('Exiting.');
    // process.exit(0);
}, 100);

//process.kill(process.pid, 'SIGINT');

setInterval(() => {
    console.log(1);
}, 1000)
console.log(`process pid --> ${process.pid}`);
const child_process = require('child_process');
// const grep = child_process.spawn('ping', ['www.baidu.com']);
const grep = child_process.fork('../child_process/fork/fork-invoke');

// grep.stdout.on('data', (data) => {
//     console.log(`grep stdout data --> ${data}`);
// });
// Send SIGHUP to process
console.log(`grep piddd --> ${grep.pid}`);
console.log(`grep killed --> ${grep.killed}`);
setTimeout(() => {
    grep.kill('SIGINT');
}, 20000);
grep.on('close', (code, signal) => {
    console.log(
        `child process terminated due to receipt of signal ${signal}`);
});
grep.on('exit', () => {
    console.log(`grep exit`);
    console.log(`grep pid --> ${grep.pid}`);
    console.log(`grep killed --> ${grep.killed}`);
});