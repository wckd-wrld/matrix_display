import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import DisplayMatrix from './DisplayMatrix'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DisplayMatrix source={logo} width={100} height={100} />
      </div>
    );
  }
}

export default App;
