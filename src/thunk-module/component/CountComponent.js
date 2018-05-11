/**
 *  Created by cl on 2018/5/10
 */

import React from 'react'

class CountComponent extends React.Component{

    render(){
        return (
            <div>
                {this.props.counter.cnt}
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.asyncAddTwo}>++</button>
                <button onClick={this.props.reduce}>-</button>
            </div>
        );
    }

}

export default CountComponent;