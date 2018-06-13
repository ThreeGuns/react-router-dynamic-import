import React from 'react';
import {render} from 'react-dom';

import './style/index.less';

import HomeComp from './home-module';

if (process.env.NODE_ENV !== 'production') {
    const {whyDidYouUpdate} = require('why-did-you-update');
    whyDidYouUpdate(React, {exclude: [/^(Connect|Route|Router|Link)/] });
}

render(<HomeComp/>, document.getElementById('root'));


