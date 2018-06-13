/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';

class A extends Component {
    constructor(props) {
        super(props)
        console.log('A is created')
    }
    componentDidMount() {
        console.log('A componentDidMount')
    }
    componentWillUnmount() {
        console.log('A componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('A componentDidUpdate')
    }
    // shouldComponentUpdate(){
    //     console.log('A shouldComponentUpdate')
    // }

    render () {
        console.log('A render');
        return (
            <div>
                A
                {this.props.children}
            </div>
        )
    }
}

export default A;