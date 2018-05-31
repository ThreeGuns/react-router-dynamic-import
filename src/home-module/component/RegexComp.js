import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class RegexComp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.match.url);
        return (
            <Router basename={`/basename`} getUserConfirmation={(message, callback) => {
                const allowTransition = window.confirm(message);
                callback(allowTransition)
            }}>
            <div>
                <ul>
                    <li><Link to={`${this.props.match.url}/order/asc`}>asc</Link></li>
                    <li><Link to={`${this.props.match.url}/order/desc`}>desc</Link></li>
                    <li><Link to={`${this.props.match.url}/order/foo`}>foo</Link></li>
                </ul>
                <Route path={`${this.props.match.url}/:id`} render={props => <div>{props.match.params.id}</div>}/>
                <Route path={`${this.props.match.url}/:id/:direction(asc|desc)`} component={Info}></Route>
            </div>
            </Router>
        );
    }
}

class Info extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div>
                {this.props.match.params.direction}
            </div>
        );
    }
}

export default RegexComp;