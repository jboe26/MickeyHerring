import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./index.css";
import Deer from './Deer1';
import Fish from './Fish1';

class Photos extends Component {
    render() {
        return (
            <React.Fragment>

            <Deer />  
            <Fish />

            </React.Fragment>
    
    
    
        )
    }
}


export default Photos;