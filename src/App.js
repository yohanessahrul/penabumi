import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Beranda from './page/Beranda';
import Tentang from './page/Tentang';
import Kontak from './page/Kontak';
import Daftar from './page/Daftar';
import Login from './page/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Beranda}/>
            <Route path="/about" component={Tentang}/>
            <Route path="/contact" component={Kontak}/>
            <Route path="/register" component={Daftar}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
