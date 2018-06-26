/**
 *  Created by cl on 2018/6/7
 */

import React from 'react';
import Loadable from 'react-loadable';

const LoadableModule = Loadable({
    loader: () => import('./containers/Root'),
    loading: () => {
        return (
            <div>
                loading...
            </div>
        );
    }
});

export default LoadableModule;