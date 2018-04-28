import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class CustomLinkComp extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <A to="/CustomLinkComp/A" active={true} label={`A`}></A>
                    <A to="/CustomLinkComp/B" active={false} label={`B`}></A>
                    <Route path={`/CustomLinkComp/A`} render={()=><div>AAA</div>}></Route>
                    <Route path={`/CustomLinkComp/B`} render={()=><div>BBB</div>}></Route>
                </div>
            </Router>
        );
    }
}

class A extends React.Component{
    constructor(props){
        super(props);
        const {to, active, label} = this.props;
        this.state = {to, active, label};
    }
    render(){
        const {to, active, label} = this.props;
        return (
            <Route path={to} children={props=>(
                <div>
                    {props.match ? '>' : ''}
                    <Link to={to} >{label}</Link>
                </div>
            )}>
            </Route>

        );
    }
}


export default CustomLinkComp;