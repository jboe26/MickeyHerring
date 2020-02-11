import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';


const FindMe = ({ text }) => <div>{text}</div>;


class MyAddress extends Component {
  static defaultProps = {
    center: {
      lat: 33.9703865781567,
      lng: -80.99084615707397
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAUBKBi3a8_o51_qE-yiRbj_RexsYRQElA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          

          <FindMe
            lat={33.9703865781567}
            lng={-80.99084615707397}
            text="Mickey Herring Taxidermy"
          />
         
        </GoogleMapReact>
        <br />
         <div>3724 Hydrangea Street <br /> Columbia, SC <br /> 29205</div>
      </div>
    );
  }
}

export default MyAddress;