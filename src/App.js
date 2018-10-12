import React, { Component } from 'react';

import { Route, Switch,Router } from 'react-router-dom';
import Beranda from './page/Beranda';
import Tentang from './page/Tentang';
import Kontak from './page/Kontak';
import Daftar from './component/DaftarHome';
import Login from './page/Login';
import InstitutionHome from './component/institutionForm/InstitutionHome';
import PersonalHome from './component/personalForm/wizard';
import confirmPage from './component/institutionForm/ConfirmPage';
import confirmPageUser from './component/personalForm/ConfirmPageUser';

import history from './history';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Beranda}/>
            <Route path="/about" component={Tentang}/>
            <Route path="/contact" component={Kontak}/>
            <Route path="/register" component={Daftar}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/institutional-register" component={InstitutionHome}/>
            <Route exact path="/personal-register" component={PersonalHome}/>
            <Route exact path="/confirm-page" component={confirmPage}/>
            <Route exact path="/user-confirm-page" component={confirmPageUser}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
