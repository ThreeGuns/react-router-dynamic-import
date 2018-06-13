/**
 *  Created by cl on 2018/6/12
 */

const convertToThunk = (cbFn) => {
    return function(){
        const args = Array.prototype.slice.call(arguments);
        return (newCb) => {
            args.push(newCb);
            cbFn(...args);
        }
    }
};

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
const sql4 = 'i am sql4';

// getTrans((trans) => {
//     trans.query(sql1, () => {
//         trans.query(sql2, () => {
//             trans.query(sql3, () => {
//
//             });
//         });
//     });
// });


getTrans((trans) => {
    const queryNew = convertToThunk(trans.query);

    //方式1
    //queryNew(sql3)(queryNew(sql2)(queryNew(sql1)()));
    //方式2
    const tQ1 = queryNew(sql1);
    const tQ2 = queryNew(sql2);
    const tQ3 = queryNew(sql3);
    const tQ4 = queryNew(sql4);
    tQ4(tQ3(tQ2(tQ1())));
    const temp = () => tQ2(tQ1());
    const temp2 = () => tQ3(temp());
    const tempt3 = () => tQ4(temp2());
    tempt3();

    const reducer = [sql1, sql2, sql3, sql4].reduce((pre, curr, index) => {
        const tqPre = index === 1 ? queryNew(pre) : pre;
        const tqOne = queryNew(curr);
        const temp = () => tqOne(tqPre());
        return temp;
    });

    reducer();

    //方式3
    const ffn1 = (cb) => () => {
        tQ1(cb);
    };
    const ffn2 = (cb) => () => {
        tQ2(cb);
    };
    const ffn3 = (cb) => () => {
        tQ3(cb);
    };
    const ffn4 = (cb) => () => {
        tQ4(cb);
    };
    const tQA = [tQ1, tQ2, tQ3, tQ4];
    const tQs = [ffn1, ffn2, ffn3, ffn4];

    // for(let i = tQs.length - 1; i > 0; i--){
    //     const temp = tQs[i - 1](tQs[i]());
    //     tQs[i - 1] = () => temp;
    // }
    // tQs[0]();

    // //方式4
    // let i = tQs.length - 1;
    // while(i > 0){
    //     const temp = tQs[i - 1](tQs[i]());
    //     tQs[i - 1] = () => temp;
    //     i--;
    // }
    // tQs[0]()();

    //sql数组的扩展
    const arrays = ['SQL1','SQL2','SQL3','SQL4'];
    const tQA2 = arrays.map(one => {
        const tQone = queryNew(one);
        return (cb) => () => {
            tQone(cb);
        };
    });
    iterateTQs(tQA2);

    // reduce实现
    // arrays.reduce((pre, curr, index, array) => {
    //     const currtQ = queryNew(curr);
    //     const currtF = (cb) => () => {
    //         currtQ(cb);
    //     };
    //     return () => currtF(pre())()();
    // });
});

//将迭代方法单独拆分出来
function iterateTQs(tQs){
    let i = tQs.length - 1;
    while(i > 0){
        const temp = tQs[i - 1](tQs[i]());
        tQs[i - 1] = () => temp;
        i--;
    }
    tQs[0]()();
}

//单参数函数迭代处理
// function oneArgCb(cb){
//     return function(){
//         cb ? cb() : void 0;
//     };
// }
// oneArgCb(oneArgCb(oneArgCb()));



//reduce处理