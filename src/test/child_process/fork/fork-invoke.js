function fib(n){
    return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

// for(let i = 0; i < 3; i++){
//     // fib(41);
//     process.send({event: 'fib-done', data: i});
// }

const arr = [1,2,3,4,5,6];

// const interval = setInterval(() => {
//     if(arr.length > 0){
//         const now = Date.now();
//         console.log(`interval --> ${arr.pop()}, and now is ${now}`);
//         return;
//     }
//     clearInterval(interval);
// }, 1000);


function convertToChunk(fn){
    return function(){
        const args = Array.prototype.slice.call(arguments);
        return function(callback){
            fn(...args, callback);
        }
    }
}

function test(arg1, cb){
    const now = Date.now();
    console.log(`i am --> ${arg1}, and now is ${now}`);
    cb && setTimeout(cb, 1000);
}

const testThunk = convertToChunk(test);
// testThunk('1')(() => {
//     console.log(`i am callback`);
// });
//
// const _temp = testThunk('2');
// _temp(() => {console.log(`i am callback2`)});

const _arr = [];
while(arr.length > 0){
    _arr.push(arr.pop());
}

const reducer = _arr.reduce((pre, curr, index) => {
    if(index === 1){
        pre = testThunk(pre);
    }
    return () => testThunk(curr)(pre);
});

reducer();
// for(let i = 0; i < 5; i++){
//     setTimeout(() => {
//         const now = Date.now();
//         console.log(`i am ${i}, and now is ${now}`);
//         fib(41);
//     }, 2000);
// }



