function fib(n){
    return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

// for(let i = 0; i < 3; i++){
//     // fib(41);
//     process.send({event: 'fib-done', data: i});
// }

setInterval(() => {
    console.log(`fork-invoke output`);
}, 1000);