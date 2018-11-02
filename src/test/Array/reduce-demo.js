const convertToThunk = (cbFn) => {
    return function(){
        const args = Array.prototype.slice.call(arguments);
        return (newCb) => {
            args.push(newCb);
            cbFn(...args);
        }
    }
};

const query = (sql, cb) => {
    console.log(sql);
    if(cb){
        setTimeout(cb, 1000);
    }
};

const queryNew = convertToThunk(query);

// queryNew('f')(() => queryNew('e')(queryNew('a')));

queryNew('aa')();

const reducer = ['a', 'b', 'c'].reduce((pre, curr, index) => {
    if(index === 1){
        pre = queryNew(pre);
    }
    return () => queryNew(curr)(pre);
});

reducer();