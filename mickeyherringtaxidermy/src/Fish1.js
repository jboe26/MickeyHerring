import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./index.css";
import Fish1 from './fish1.jpg';

class Fish extends Component {
    render() {
        return (
            <img src={Fish1} alt="deer" height="300" /> 
            
            
        )
    }
}

export default Fish;