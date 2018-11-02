
const a = ['a', 'b', 'c'];

const convertToThunk = (cbFn) => {
    return function(){
        const args = Array.prototype.slice.call(arguments);
        return (newCb) => {
            args.push(newCb);
            cbFn(...args);
        }
    }
};

const fn = convertToThunk((data, callback) => {
    console.log(data);
    callback && callback();
});


function fn2(cb){
    cb();
}

const b = [1,2,3].reduce((pre, curr, index) => {
    console.log(index);
    return pre + curr;
});

console.log(b);

setTimeout(() => {
    console.log('A');
    setTimeout(() => {
        console.log('B');
        setTimeout(() => {
            console.log('C');
        }, 2000);
    }, 2000);
}, 2000);