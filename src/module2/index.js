import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>loading ...</div>;

const LoadableComp = Loadable({
    loader: () => import('./component/TestComp'),
    loading: Loading
});

export default LoadableComp;