/**
 *  Created by cl on 2018/7/20
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