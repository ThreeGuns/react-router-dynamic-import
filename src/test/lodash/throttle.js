const lodash = require('lodash');

function fib(n){
    return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

function b(i){
    console.log(i);
}

const a = lodash.throttle(b, 2000);
for(let i = 0; i < 10; i++){
    console.log(fib(38));
    a(i);
}


