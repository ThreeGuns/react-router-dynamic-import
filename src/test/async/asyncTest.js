const a = async () => {
    const ret = await new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
            // throw new Error('aaa');
        })
    }).then(data => data + 1);
    return ret;
};
a().then(data => console.log(data)).catch(e => {
    console.error(e);
});