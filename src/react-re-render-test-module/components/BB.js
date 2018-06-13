/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';

class BB extends Component {
    constructor(props) {
        super(props)
        console.log('BB is created')
    }
    componentDidMount() {
        console.log('BB componentDidMount')
    }
    componentWillUnmount() {
        console.log('BB componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('BB componentDidUpdate')
    }

    render () {
        console.log('BB render')
        return (
            <div>
                BB
                {this.props.children}
            </div>
        )
    }
}

export default BB;