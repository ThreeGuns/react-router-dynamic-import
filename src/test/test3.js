/**
 *  Created by cl on 2018/5/10
 */


const test = () => (() => (() => {
    console.log('hhhh');
})())();

test();

const convertToThunk = (cbFn) => {
    return function(){
        const args = Array.prototype.slice.call(arguments);
        return (newCb) => {
            args.push(newCb);
            cbFn(...args);
        }
    }
};

const fnOrigin = (arg, cb) => {
    console.log(arg);
    cb();
};

const fnNew = convertToThunk(fnOrigin);
//fnNew(arg)(cb) ==> fnOrigin(arg, cb)

//实例

fnOrigin('参数1', () => {console.log('cb参数1')});
fnNew('参数2')(() => {console.log('cb参数2');});


//场景，传递trans，依次执行
// getTrans((trans) => {
//     trans.query(sql1, () => {
//         trans.query(sql2, () => {
//
//         })
//     });
// })

//模拟getTrans
const getTrans = (cb) =>{
    const trans = {
        query: (sql, cb2) => {
            console.log(sql);
            if(cb2) cb2();
        }
    };
    cb(trans);
};

const sql1 = 'i am sql1';
const sql2 = 'i am sql2';
const sql3 = 'i am sql3';
getTrans((trans) => {
    trans.query(sql1, () => {
        trans.query(sql2, () => {
            trans.query(sql3, () => {

            });
        });
    });
});

getTrans((trans) => {
    const queryNew = convertToThunk(trans.query);
    // // 方式一
    // queryNew(sql3)(queryNew(sql2)(queryNew(sql1)()));
    // // 方式二
    // const tQ1 = queryNew(sql1);
    // const tQ2 = queryNew(sql2);
    // const tQ3 = queryNew(sql3);
    // tQ3(tQ2(tQ1()));
    // 方式三
    const tQs = [];
    const tQ1 = queryNew(sql1);
    const tQ2 = queryNew(sql2);
    const tQ3 = queryNew(sql3);
    const ffn1 = (cb) => () => {
        tQ1(cb);
    };
    const ffn2 = (cb) => () => {
        tQ2(cb);
    };
    const ffn3 = (cb) => () => {
        tQ3(cb);
    };
    tQs.push(ffn1, ffn2, ffn3);
    for(let i = tQs.length - 1; i > 0; i--){
        const temp = tQs[i - 1](tQs[i]());
        tQs[i - 1] = () => temp;
    }
    itfs(tQs);
});

//iterator thunk functions
function itfs(tfs){
    for(let i = tfs.length - 1; i > 0; i--){
        const temp = tfs[i - 1](tfs[i]());
        tfs[i - 1] = () => temp;
    }
    tfs[0]()();
}

// queryNew = convertToThunk(trans.query);
// queryNew(sql1)()


const fn1 = (cb) => () => {
    console.log('cb1');
    if(cb) cb();
}

const fn2 = (cb) => () => {
    console.log('cb2');
    if(cb) cb();
}

const fn3 = (cb) => () => {
    console.log('cb3');
    if(cb) cb();
}

const fns = [fn1, fn2, fn3];

function iterateFns(fns){
    //单callback arg时预生成验证
    for(let i = 0; i < fns.length - 1; i++){
        // fns[i - 1] = fns[i - 1](fns[i]());
        const temp = fns[i + 1](fns[i]());
        fns[i + 1]  = function(){
            return temp;
        };
        // fns[i - 1] = () => fns[i - 1](fns[i]);

        // fn2(fn1())
    }

    fns[fns.length - 1]()();
}

iterateFns(fns);
// fn3(fn2(fn1()))();


//嵌套以为着可以循环和迭代
//并行代码不行
//即，将()()()转换为((()))

//单参数模式下转换实例如上
//多参数下，需要将多参数转换为单参数

const multiArgFn = (arg1, arg2) => {

};

const convert = (fn) => {
    return function(){
        const args = Array.prototype.slice.call(arguments);
        return function(cb){
            fn.apply(this, args.push(cb));
        };
    }
};

const arrs = [11,22,33];

const fns2 = arrs.map(one => (arg1, cb) => {
    console.log(one);
    console.log(arg1);
    return cb;
});

const convfns2 = fns2.map(oneFn => convert(oneFn));

// iterateFns(convfns2);
