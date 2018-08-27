import React, { Component } from 'react';
import logo from './img/car.png';
import './App.css';
import DisplayMatrix from './DisplayMatrix'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayMatrix source={logo} width={200} height={100} />
      </div>
    );
  }
}

export default App;
