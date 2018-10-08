import React, { Component } from 'react';
import Navigation from '../component/Navigation';
import SliderSection from '../component/SliderSection';
import CoreValue from '../component/CoreValue';
import Program from '../component/Program';
import Partnership from '../component/Partnership';
import Footer from '../component/Footer';

class Beranda extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isLoading: true
      })
    }, 500);
  }
  render() {
    if (this.state.isLoading === false) {
      return (
        <div style={{ width: '100%', height: '100vh', background: 'white', position: 'relative' }}>
          <img style={{ position: 'absolute', left: 0, right: 0, margin: '20% auto' }} alt="loading" src={'/loader-bars.gif'} />
        </div>
      )
    } else {
      return (
        <div>
          <Navigation/>
          <SliderSection/>
          <CoreValue/>
          <Program/>
          <Partnership/>
          <Footer/>
        </div>
      );
    }
  }
}

export default Beranda;