/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';

class D extends Component {
    constructor(props) {
        super(props)
        console.log('D is created')
    }
    componentDidMount() {
        console.log('D componentDidMount')
    }
    componentWillUnmount() {
        console.log('D componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('D componentDidUpdate')
    }

    render () {
        console.log('D render')
        return (
            <div>
                D
                {this.props.children}
            </div>
        )
    }
}

export default D;