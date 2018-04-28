import React from 'react';

class Sheet extends React.Component{
    constructor(props){
        super(props);
        this.handleFile = this.handleFile.bind(this);
    }
    handleFile(file){

    }
    render(){
        return (
            <div>
                <DragDropFile>
                    <InputComp handleChange={this.handleFile}></InputComp>
                    <OutputComp></OutputComp>
                </DragDropFile>
            </div>
        );
    }

}

class DragDropFile extends React.Component{

    render(){
        return this.props.children;
    }
}

class InputComp extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const files = e.target.files;
        if(files && files[0]){
            this.props.handleFile(files[0]);
        }
    }
    render(){
        return (
            <div>
                <input type={`file`} accept={acceptFileTypes} onChange={this.props.handleChange}/>
            </div>
        );
    }
}

class OutputComp extends React.Component{



}

const acceptFileTypes = ['xlsx','txt','csv'].map(one => '.'+one).join(',');

export default Sheet;