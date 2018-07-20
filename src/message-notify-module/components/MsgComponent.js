/**
 *  Created by cl on 2018/7/20
 */
import React, {Component} from 'react';
import notify3Png from '../../images/message-notify-module/notify-3.png';
import loadingSpinnerPng from '../../images/message-notify-module/loading-spinner.png';
import { Scrollbars } from 'react-custom-scrollbars';

class MsgComponent extends Component {
    constructor(arg) {
        super(arg);
        this.onScrollStop = this.onScrollStop.bind(this);
    }

    onScrollStop(){
        // const scrollHeight = this.refs.scrollbars.getScrollHeight();
        // const clientHeight = this.refs.scrollbars.getClientHeight();
        const values = this.refs.scrollbars.getValues();
        if(values.top === 1){
            this.props.onScrollToBottom();
        }
    }

    render() {
        const {msgs} = this.props;
        const items = msgs.map((one, index) => {
            return (
                <div className="item" key={index}>
                    <div className="head">
                        <div className="notify">
                            {/*<div className="notify-img">
                                <div className="notify-img-inner"></div>
                            </div>*/}
                            {
                                !one.read && <span className="unread"></span>
                            }
                            <img src={notify3Png} alt=""/>
                            <label className="event-title">
                                {one.title}
                            </label>
                        </div>
                        <label className="time">
                            {one.time}
                        </label>
                    </div>
                    <div className="content">{one.message}</div>
                </div>
            );
        });
        return (
            <div>
                <div className="msg-notify" style={{display: this.props.showMsgs}}>
                    <div className="msg-notify-head">
                        {/*<label className="msg-notify-head-return">&lt;</label>*/}
                        <i className="msg-notify-head-return lt"><i className="lt-inner"></i></i>
                        <label className="msg-notify-head-text">消息</label>
                    </div>
                    <div className="msg-notify-content">
                        <Scrollbars onScrollStop={this.onScrollStop} ref="scrollbars">
                            {items}
                        </Scrollbars>
                        {
                            this.props.showLoading &&
                            <div className="loadingMsg">
                                <img src={loadingSpinnerPng}/>
                                加载中
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MsgComponent;