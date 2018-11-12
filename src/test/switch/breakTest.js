const a = 1;

switch (a) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
    default:
        console.log('0');

}
const events = require('events');
const EventEmitter = events.EventEmitter;

class A extends EventEmitter {

    constructor() {
        super();
    }

}

const aa = new A();
aa.on('a', (data) => {
    console.log(data);
});

aa.emit('a', 'data2');

aa.removeAllListeners('a');

aa.emit('a', 'data3');
