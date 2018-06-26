/**
 *  Created by cl on 2018/6/13
 */

import React, {Component} from 'react';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

class RxjsHomeContainer extends Component{

    render(){
        range(1, 200)
            .pipe(filter(x => x % 2 === 1), map(x => x + x))
            .subscribe(x => console.log(x));

        return <div>rxjs home</div>;
    }
}

export default RxjsHomeContainer;