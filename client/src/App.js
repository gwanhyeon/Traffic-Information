import React, { Component } from 'react';
import './App.css';
import SignupContainers from './containers/SignupContainers';
import SigninContainers from './containers/SigninContainers';
class App extends Component {
  render() {
    return (
      <div>
        <div>
        <SignupContainers></SignupContainers>
        </div>
        <div>
        <SigninContainers></SigninContainers>
        </div>
      </div>
    );
  }
}

export default App;
