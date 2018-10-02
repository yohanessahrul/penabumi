import React, { Component } from 'react';
import {  } from 'reactstrap';

class Slider extends Component {
  render() {
    return (
      <div>
        <div className="slideWraper">
          <img className="mapImage" alt="map" src={'/images/mapbackground.png'}/>
          <img className="o2oStyle" alt="o2o" src={'/images/o2o.png'} />
        </div>
      </div>
    );
  }
}

export default Slider;