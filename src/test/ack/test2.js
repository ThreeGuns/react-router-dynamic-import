
let latestTime;

const timer = (eventName) => {
    const now = Date.now();
    console.log(`---> ${eventName} spend ${now - (latestTime || now)}`);
    latestTime = now;
};

class EventEmitter{

    constructor(){
        this._listeners = {};
    }

    on(eventName, cb){
        this._listeners[eventName] = cb;
    }

    emit(eventName, ...args){
        const _listener = this._listeners[eventName];
        _listener && _listener.apply(this, args || []);
    }
}

class Pool extends EventEmitter{

    constructor(){
        super();
        this.cacheKey = 'cacheKey';
        this.addList = [];
        this.locks = [];
        this.on('flush', (flushData, whenFlush) => {
            if(flushData){
                this.addList.push({...flushData, whenFlush});
                console.log(`addList ++ ${this.addList.length}`);
            }
            while(this.locks.length < 1 && this.addList.length > 0){
                const newData = this.addList.shift();
                this.locks.push(newData);
                const whenFlush = newData.whenFlush;
                setTimeout(() => {
                    whenFlush();
                    this.emit('notify', newData);
                }, 0);
            }
        });

        this.on('notify', (notifyData) => {
            const index = this.locks.findIndex(oneLock => oneLock[this.cacheKey] && notifyData[this.cacheKey] && oneLock[this.cacheKey] === notifyData[this.cacheKey]);
            if(index > -1){
                //释放oneLock
                console.log(`--`);
                this.locks.splice(index, 1);
                this.emit('flush');
            }
        });
    }
}

class Test extends EventEmitter{
    constructor(){
        super();
        this.pool = new Pool();
        this.on('event', (data) => {
            this.pool.emit('flush', data, () => {
                fib(40);
                console.log(`event --> ${data.cacheKey}`);
                this.emit(`render`, data);
            });
        });
        this.on('render', (data) => {
            console.log(`render --> ${data.cacheKey}`);
        });
    }
}

function fib(n){
    return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}

const test = new Test();
timer(`begin`);
for(let i = 0; i < 3; i++){
    test.emit('event', {cacheKey: i+'_a'});
}
timer(`loop end`);
setInterval(() => {
    fib(1);
    console.log('i am render process');
}, 1000);

// const m = 40;
// function fib(n){
//     return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
// }
// function fib2(n){
//     return n < 3 ? 1 : fib2(n - 1) + fib2(n - 2) + 1;
// }
// timer(`fib begin`);
// console.log(m);
// console.log(fib(m));
// console.log(fib2(m));
// console.log(2*fib(m) - 1);
// console.log(fib(m + 1 )/(2*fib(m) - 1));
// timer(`fib end`);