/**
 *  Created by cl on 2018/6/7
 */

import React, {Component, PureComponent} from 'react';

class CC extends Component {
    constructor(props) {
        super(props)
        console.log('CC is created')
    }
    componentDidMount() {
        console.log('CC componentDidMount')
    }
    componentWillUnmount() {
        console.log('CC componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('CC componentDidUpdate')
    }

    render () {
        console.log('CC render')
        return (
            <div>
                CC
                {this.props.children}
            </div>
        )
    }
}

export default CC;