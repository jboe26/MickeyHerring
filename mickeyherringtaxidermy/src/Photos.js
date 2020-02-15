import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./index.css";
import Deer1 from './Deer1';
import Fish1 from './Fish1';

class Photos extends Component {
    render() {
        return (
            <React.Fragment>

            <Deer1 />  
            <Fish1 />

            </React.Fragment>
    
    
    
        )
    }
}


export default Photos;