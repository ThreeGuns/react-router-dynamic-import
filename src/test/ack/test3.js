function fib(n){
    return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

for(let i = 0; i < 3; i++){
    setTimeout(() => {
        fib(40);
        console.log(i);
    }, 5000);
}

setTimeout(() => {
    console.log(1000);
}, 10);
