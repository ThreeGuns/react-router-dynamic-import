/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';

class B extends Component {
    constructor(props) {
        super(props)
        console.log('B is created')
    }
    componentDidMount() {
        console.log('B componentDidMount')
    }
    componentWillUnmount() {
        console.log('B componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('B componentDidUpdate')
    }

    render () {
        console.log('B render')
        return (
            <div>
                B
                {this.props.children}
            </div>
        )
    }
}

export default B;