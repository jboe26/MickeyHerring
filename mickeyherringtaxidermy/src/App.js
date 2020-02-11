import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./index.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Photos  from "./Photos";
import ContactMe from "./ContactMe";
import PriceList from "./PriceList";
import Directions from "./Directions";

class Nav extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Welcome to Mickey Herring Taxidermy</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Photos">Photos</NavLink></li>
            <li><NavLink to="/PriceList">Price List</NavLink></li>
            <li><NavLink to="/ContactMe">Contact Me</NavLink></li>
            <li><NavLink to="/Directions">Directions</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/Photos" component={Photos}/>
             <Route path="/PriceList" component={PriceList}/>
             <Route path="/ContactMe" component={ContactMe}/>
             <Route path="/Directions" component={Directions}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}


export default Nav;