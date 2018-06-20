/**
 * Create by cl on 2018/6/20
 */

const events = require('events');
const EventEmitter = events.EventEmitter;

const {Observable, Subject, ReplaySubject, from, of, range, fromEvent} = require('rxjs');
const {map, filter, switchMap} = require('rxjs/operators');

range(1, 5).pipe(filter(x => x % 2 === 1), map(x => x + x)).subscribe(x => console.log(x));

const ev = new EventEmitter();
fromEvent(ev, 'do').subscribe(() => {
    console.log(`ev do`);
});
ev.emit(`do`);
ev.emit(`do`);
ev.emit(`do`);

const onePromise = new Promise((res, rej) => {
    setTimeout(() => {
        console.log(`a`);
        res();
    }, 0)
});

from(onePromise).subscribe(() => {
    console.log(`b`);
});
from(onePromise).subscribe({
    next: () => {
        console.log(`c`);
    },
    error: {},
    complete: () => {
        console.log(`complete!`);
    }
});

of(1,2,3).subscribe(data => {
    console.log(data);
});
