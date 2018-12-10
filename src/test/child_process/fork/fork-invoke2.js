let times = 0;
let fibTimes = 0;

function fib(n){
    //if(n === 40) console.log(`child fibTimes --> ${++fibTimes}`);
    ++times;
    return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
}
console.log(fib(39));
console.log(times);
// console.log(fib(40));
// console.log(fib(41));
// const interval = setInterval(() => {
//     console.log(`child times --> ${++times}`);
//     // fib(30);
// }, 1000);

process.on('SIGINT', () => {
    console.log('Got SIGINT signal.');
    // clearInterval(interval);
    process.exit(0);
});

process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.');
    // process.exit();
});

process.on('SIGTERM', () => {
    console.log('Got SIGTERM signal.');
    // process.exit();
});

