const a = 1;

switch (a) {
    case 1:
        console.log('1');
    case 2:
        console.log('2');

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

db.t2.aggregate([{$group: {"_id": {"country": "$country", "province": "$province", "uid": "$userid"}}}])

db.t2.aggregate([
        {$group:
                {
                    "_id": {"country": "$country", "prov": "$province"},
                    "number": {$sum: 1}
                }
        }
    ]);
