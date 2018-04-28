import React from 'react';
import Loadable from 'react-loadable';

const LoadableComp = Loadable({
    loader: () => import('./component/Sheet'),
    loading: () => <div>loading ...</div>
});

export default LoadableComp;