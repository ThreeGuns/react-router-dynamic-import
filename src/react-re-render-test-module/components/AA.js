/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';

class AA extends Component {
    constructor(props) {
        super(props)
        console.log('AA is created')
    }
    componentDidMount() {
        console.log('AA componentDidMount')
    }
    componentWillUnmount() {
        console.log('AA componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('AA componentDidUpdate')
    }

    render () {
        console.log('AA render');
        return (
            <div>
                AA
                {this.props.children}
            </div>
        )
    }
}

export default AA;