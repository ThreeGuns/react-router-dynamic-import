/**
 * Create by cl on 2018/6/22
 */

import React from 'react';

class HomeComponent extends React.Component{
    render(){
        const {cnt, clickBtn, clickBtn2} = this.props;
        return (
            <div>
                <button id="btn-add" onClick={clickBtn}>click me to add</button>
                <button id="btn-reduce" onClick={clickBtn2}>click me to reduce</button>
                <label id={`cnt`}>{cnt}</label>
            </div>
        );
    }
}

export default HomeComponent;