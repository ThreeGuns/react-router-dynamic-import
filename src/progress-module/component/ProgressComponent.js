/**
 *  Created by cl on 2018/5/17
 */

import React, {Component} from 'react';

import ProgressItemContainer from '../container/ProgressItemContainer';

class ProgressComponent extends Component{

    componentDidMount(){
        this.props.init(this.props.initData);
    }

    render(){
        const {tasks} = this.props;
        const items = !!tasks[0] && tasks.map((oneTask, index) => <ProgressItemContainer key={index} task={oneTask}></ProgressItemContainer>);
        return (
            <div>
                <div className='progress-download'>
                    {items}
                    <button style={{textAlign: 'right'}} onClick={() => {this.props.init(this.props.initData);}}>重置</button>
                </div>
            </div>
        );
    }
}

export default ProgressComponent;