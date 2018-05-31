import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const auth = {
    flag: false
};

class AuthComp extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li><Link to={`${this.props.match.url}/public`}>public</Link></li>
                    <li><Link to={`${this.props.match.url}/private`}>private</Link></li>
                </ul>
                <hr/>
                <Route path={`${this.props.match.url}/public`} component={Public}></Route>
                {/*<PrivateRoute path={`${this.props.match.url}/private`} component={Private}></PrivateRoute>*/}
            </div>
        );
    }
}

class Public extends React.Component{
    render(){
        return (
            <div>public</div>
        );
    }
}

class Private extends React.Component{
    render(){
        return (
            <div>Private</div>
        );
    }
}

class PrivateRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }
    login(){
        auth.flag = true;
        this.setState({redirectToReferrer: true});
    }
    render(){
        return (
            <Route {...this.props} render={props=>{
                if(this.state.redirectToReferrer){
                    return <Component {...props}></Component>
                }else{
                    return <button onClick={this.login.bind(this)}>login</button>;
                }
            }}>
            </Route>
        );
    }
}

export default AuthComp;