import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class ModalSwitch extends React.Component{
    constructor(props){
        super(props);
        this.previousLocation = this.props.location;
    }

    componentWillUpdate(nextProps){
        const {location} = this.props;
        // if(nextProps.history.action !== ){
        //
        // }
    }

    render(){
        return (
            <Router>
                <Route component={ModalSwitch} />
            </Router>
        );
    }
}

class ModalGalleryComp extends React.Component{
    render(){
        return (
            <Router>
                <Route component={ModalSwitch} />
            </Router>
        );
    }
}

export default ModalGalleryComp;