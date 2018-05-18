/**
 *  Created by cl on 2018/5/17
 */

import React from 'react';
import Loadable from 'react-loadable';

const LoadableModule = Loadable({
    loader: () => import('./container/Root'),
    loading: () => <div>loading</div>,
});

export default LoadableModule;