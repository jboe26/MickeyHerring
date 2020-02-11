import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./index.css";
import Deer1 from './deer.jpg';

class Deer extends Component {
    render() {
        return (
            <img src={Deer1} alt="deer" height="300" /> 
            
            
        )
    }
}

export default Deer;