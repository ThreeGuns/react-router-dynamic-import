import React from 'react';
import {render} from 'react-dom';

import './style/index.less';

import LinkComp from './home-module';

// import AsyncComp from './module3';
// import ListComponent from 'bundle-loader?lazy&name=[name]!./file/List.jsx';



class Comp1 extends React.Component{
    render(){
        return (
            <div>
                <LinkComp/>
                {/*<AsyncComp/>*/}
            </div>
        );
    }
}

render(<Comp1/>, document.getElementById('root'));


