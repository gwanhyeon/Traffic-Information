import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './auth/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Navbar1 from './components/Navbar1';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Board from './components/Board';
import BoardForm from './components/BoardForm';
import BoardRead from './components/BoardRead';
import Contact from './components/ContactForm';
import './bootstrap.min.css';
import TransInfo from './components/TransInfo';
import About from './components/About';

import './css/contactform.css'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/signin'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                
        <Router>
            <div >
              <Navbar1 />
                <Route exact path="/" component={ Home } />
                
                <div className="container-fluid"> 
                  <Route exact path="/board" component={Board}/>
                  <Route exact path="/transportation" component={TransInfo}/>
                  <Route exact path="/about" component={About}/>

                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/signup" component={ Signup } />
                  <Route exact path="/signin" component={ Signin } />
                  <Route exact path = "/BoardForm" component = {BoardForm} />
                  <Route exact path = "/BoardRead" component = {BoardRead} />

                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
