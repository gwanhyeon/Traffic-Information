import React, { Component } from 'react';

import Navbar from './components/navbar';
import Register from './components/signup';
import Login from './components/signin';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navbar />
              <Route exact path="/" component={ Home } />
              <div className="container">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />


                <p> 이지현 테스트 </p>

                <p> 깃허브 테스트 준석s edit</p>

              </div>
          </div>
        </Router>
    
    );
  }
}

export default App;