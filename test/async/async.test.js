/**
 * Create by cl on 2018/6/25
 */

function get(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true);
        }, 0);
    });
}

describe('test promise async', () => {

    it('test done', done => {
        let res = false;
        setTimeout(() => {
            res = true;
            expect(res).toBeTruthy();
            done();
        }, 0);
    });

    it('test promise', () => {
        get().then((res) => {
            expect(res).toBeTruthy();
        });
    });

    it('test async/await', async () => {
        const res = await get();
        expect(res).toBeTruthy();
    });
});