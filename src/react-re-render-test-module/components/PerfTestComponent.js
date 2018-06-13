/**
 *  Created by cl on 2018/6/7
 */

import React, {Component,PureComponent} from 'react';

class ItemComponent extends Component{
    render(){
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}

class PerfTestComponent extends Component {
    constructor(props) {
        super(props)
        console.log('PerfTestComponent is created')
        this.state = {
            multiplier: 0
        };
        this.resetMultiplier = this.resetMultiplier.bind(this);
        this.arr = this.generateArray(5000);
    }
    componentDidMount() {
        console.log('PerfTestComponent componentDidMount')
        console.log(new Date().getTime());
    }
    componentWillUnmount() {
        console.log('PerfTestComponent componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('PerfTestComponent componentDidUpdate');
        console.log(new Date().getTime());
    }
    // shouldComponentUpdate(){
    //     console.log('A shouldComponentUpdate')
    // }
    resetMultiplier(i){
        this.setState({
            multiplier: i
        });
    }
    generateArray(size){
        return Array.apply(null, { length: size }).map(Number.call, Number);
    }
    render () {
        console.log('PerfTestComponent render');
        console.log(new Date().getTime());

        return (
            <div>
                <button onClick={() => {this.resetMultiplier(1)}}>Click Me 1</button>
                <button onClick={() => {this.resetMultiplier(2)}}>Click Me 2</button>
                <ul>
                    {
                        this.arr.map((one, i) => <ItemComponent key={i} text={i+this.state.multiplier}/>)
                    }
                </ul>
            </div>
        );
    }
}

export default PerfTestComponent;