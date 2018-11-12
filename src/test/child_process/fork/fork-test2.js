const child_process = require('child_process');

const proc = child_process.fork('./fork-invoke2');

console.log(`child proc started and pid is ${proc.pid}`);

proc.on('exit', (code) => {
    console.log(`child proc exit and code is ${code}`, proc.killed);
});

proc.on('close', (code) => {
    console.log(`child proc close and code is ${code}`, proc.killed);
});

setTimeout(() => {
    console.log(`send SIGINT to child_proc`);
    proc.kill('SIGINT');
    process.exit();
}, 5000);

setInterval(() => {
    console.log(`i am parent, child_proc status is ${!proc.killed} `);
}, 1000);