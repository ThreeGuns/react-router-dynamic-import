function fib(n){
    return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

const interval = setInterval(() => {
    console.log(`i am child `);
    fib(40);
}, 1000);

process.on('SIGINT', () => {
    console.log('Got SIGINT signal.');
    // clearInterval(interval);
    // process.exit();
});

process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.');
    // process.exit();
});


