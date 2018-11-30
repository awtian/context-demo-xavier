import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Users from './components/Users'

//context
import MyProvider from './MyProvider'

class App extends Component {
  
  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              Learn React
          </header>
          <Users />
        </div>
      </MyProvider>
    );
  }
}

export default App;
