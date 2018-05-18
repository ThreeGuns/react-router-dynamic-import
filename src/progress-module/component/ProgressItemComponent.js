/**
 *  Created by cl on 2018/5/17
 */

import React, {Component} from 'react';

import closePng from '../../img/close.png';
import docxPng from '../../img/docx.png';
import continuePng from '../../img/download-continue.png';
import pausePng from '../../img/download-pause.png';

class ProgressItemComponent extends Component{

    componentDidMount(){
        this.initDownload();
    }

    componentWillUnmount(){
        this.beginPause();
    }

    //初始加载时，根据默认状态确定是否自动加载
    initDownload(){
        const {pause} = this.props.task;
        pause ? this.beginPause() : this.beginDownload();
    }

    beginDownload(){
        this.interval ? clearInterval(this.interval) : void 0;
        this.interval = setInterval(() => {
            const {reRender, task} = this.props;
            const {percent} = task;
            if(percent < 100){
                reRender(Object.assign({}, task, {percent: percent + 1, pause: false}));
            }else{
                clearInterval(this.interval);
            }
        }, 100);
    }

    beginPause(){
        const {task, reRender} = this.props;
        this.interval ? clearInterval(this.interval) : void 0;
        reRender(Object.assign({}, task, {pause: true}));
    }

    render(){
        const {task} = this.props;
        const {percent, name, pause} = task;
        const downloading = parseInt(percent) < 100;
        return (
            <div className="outer">
                <div style={{width: parseInt(percent)+'%'}} className="inner">
                </div>
                <div className={`content`}>
                    <img className="img-left" src={docxPng}/>
                    <div className="info-center">
                        <label>{name}</label><br/>
                        <label>{percent+'%'}</label>
                    </div>
                    <div className="actions">
                        <img className="img-right" src={
                            downloading ? (pause ? continuePng : pausePng) : closePng
                        } onClick={() => {
                            downloading ?  (pause ? this.beginDownload() : this.beginPause()):
                                this.props.remove(Object.assign({}, task));
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressItemComponent;