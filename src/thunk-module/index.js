/**
 *  Created by cl on 2018/5/10
 */

import React from 'react';
import Loadable from 'react-loadable';

class LoadingComponent extends React.Component{
    render(){
        return (
            <div>
                加载中...
            </div>
        );
    }
}

const LoadableContainer = Loadable({
    loader: () => {
        return import('./container/Root');
    },
    //三种格式都可以
    // loading: () => {
    //     return <LoadingComponent/>;
    // },
    // loading: () => <LoadingComponent/>
    // ,
    loading: LoadingComponent
    ,
});

export default LoadableContainer;
