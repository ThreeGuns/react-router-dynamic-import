/**
 * Create by cl on 2018/6/25
 */

const forEach = (arr, fn) => {
    for(let i = 0; i < arr.length; i++){
        fn(arr[i]);
    }
};

export default forEach;