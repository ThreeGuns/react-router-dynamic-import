import React, {Component, PureComponent} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import RegexComp from './component/RegexComp';
import AuthRedirectComp from './component/AuthRedirectComp';
import AuthRedirectComp2 from './component/AuthRedirectComp2';
import CustomLinkComp from './component/CustomLinkComp';

import CodeSplitting from '../module2';
import xlsx from '../xlsx';
import ThunkModule from '../thunk-module';
import ProgressModule from '../progress-module';
import CertificateModule from '../certificate';
import ReactReRenderTestModule from '../react-re-render-test-module';

class HomeComponent extends Component{
    componentDidMount(){
        console.log(`HomeComponent componentDidMount`);
    }
    componentDidUpdate(){
        console.log(`HomeComponent componentDidUpdate`);
    }
    shouldComponentUpdate(){
        return false;
    }
    render(){
        console.log(`HomeComponent render`);
        return (
            <Router basename="/">
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li><Link to={`/regex`}>Regex</Link></li>
                        <li><Link to={`/auth`}>AuthComp</Link></li>
                        <li><Link to={`/auth2`}>AuthComp2</Link></li>
                        <li><Link to={`/CustomLinkComp`}>CustomLinkComp</Link></li>
                        <li><Link to={`/Loadable`}>Loadable-CodeSplitting</Link></li>
                        <li><Link to={`/xlsx`}>xlsx</Link></li>
                        <li><Link to={`/thunk-module`}>thunk-module-counter</Link></li>
                        <li><Link to={`/progress-module`}>progress-module</Link></li>
                        <li><Link to={`/certificate`}>CertificateModule</Link></li>
                        <li><Link to={`/react-re-render-test`}>react-re-render-test-module</Link></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={TopicsRoute} />
                    <Route path={`/regex`} component={RegexComp}/>
                    <Route path={`/auth`} component={AuthRedirectComp}/>
                    <Route path={`/auth2`} component={AuthRedirectComp2}/>
                    <Route path={`/CustomLinkComp`} component={CustomLinkComp}/>
                    <Route path={`/Loadable`} component={CodeSplitting}/>
                    <Route path={`/xlsx`} component={xlsx}/>
                    <Route path={`/thunk-module`} component={ThunkModule}/>
                    <Route path={`/progress-module`} component={ProgressModule}/>
                    <Route path={`/certificate`} component={CertificateModule}/>
                    <Route path={`/react-re-render-test`} component={ReactReRenderTestModule}/>
                </div>
            </Router>
        );
    }
}

class Home extends PureComponent{
    componentDidMount(){
        console.log(`Home componentDidMount`);
    }
    componentDidUpdate(){
        console.log(`Home componentDidUpdate`);
    }
    render(){
        console.log(`Home render`);
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

const TopicsRoute = ({match}) => (
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

export default HomeComponent;
