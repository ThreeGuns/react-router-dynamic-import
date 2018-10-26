
let latestTime;

const timer = (eventName) => {
    const now = Date.now();
    console.log(`---> ${eventName} spend ${now - (latestTime || now)}`);
    latestTime = now;
};

class EventEmitter{

    on(eventName, cb){
        this._listeners[eventName] = cb;
    }

    emit(eventName, ...args){
        const _listener = this._listeners[eventName];
        _listener && _listener.apply(this, args || []);
    }
}

class Test extends EventEmitter{

    constructor(){
        super();
        this.pool = new Pool();
        this._listeners = {};
        this.on('event', (data) => {
            setTimeout(() => {
                test.pool.emit('flush', data, () => {
                    console.log(data);
                    setTimeout(() => {
                        this.pool.emit('notify', data);
                    }, 5000);
                });
            }, 0);
        });
    }

}

class Pool extends EventEmitter{

    constructor(){
        super();
        this.cacheKey = 'cacheKey';
        this._listeners = {};
        this.addList = [];
        this.locks = [];
        this.on('flush', (flushData, whenFlush) => {
            if(flushData){
                this.addList.push({...flushData, whenFlush});
                console.log(`++ ${this.addList.length}`);
            }
            while(this.locks.length < 10 && this.addList.length > 0){
                const newData = this.addList.shift();
                this.locks.push(newData);
                const whenFlush = newData.whenFlush;
                setTimeout(() => {
                    whenFlush();
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

setTimeout(() => {
    console.log(`bbb`);
}, 0);
const test = new Test();
timer(`begin`);
for(let i = 0; i < 10; i++){
    test.emit('event', {cacheKey: i+'_a'});
}
timer(`loop end`);
console.log('aaa');


