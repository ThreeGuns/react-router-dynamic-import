import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import RegexComp from './component/RegexComp';
import AuthRedirectComp from './component/AuthRedirectComp';
import AuthRedirectComp2 from './component/AuthRedirectComp2';
import CustomLinkComp from './component/CustomLinkComp';

// import CodeSplitting from '../module2';
// import xlsx from '../xlsx';

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to={`/regex`}>Regex</Link></li>
                <li><Link to={`/auth`}>AuthComp</Link></li>
                <li><Link to={`/auth2`}>AuthComp2</Link></li>
                <li><Link to={`/CustomLinkComp`}>CustomLinkComp</Link></li>
                <li><Link to={`/Loadable`}>Loadable-CodeSplitting</Link></li>
                <li><Link to={`/xlsx`}>xlsx</Link></li>
            </ul>
            <Route path={`/regex`} component={RegexComp}/>
            <Route path={`/auth`} component={AuthRedirectComp}/>
            <Route path={`/auth2`} component={AuthRedirectComp2}/>
            <Route path={`/CustomLinkComp`} component={CustomLinkComp}/>
            {/*<Route path={`/Loadable`} component={CodeSplitting}/>*/}
            {/*<Route path={`/xlsx`} component={xlsx}/>*/}

            <hr/>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/article">Article</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home} />
            <Route path="/article" component={Article} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

class Article extends React.Component{
    render(){
        return <div>Article page!</div>
    }
}

const Topics = ({match}) => (
    <div>
        <h3>Topics</h3>
        <ul>
            <li><Link to={`${match.url}/aaa`}>aaa</Link></li>
            <li><Link to={`${match.url}/bbb`}>bbb</Link></li>
            <li><Link to={`${match.url}/ccc`}>ccc</Link></li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

class Topic extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.match.params.topicId}
            </div>
        )
    }
}

export default BasicExample;
