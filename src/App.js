import React, { Component } from 'react';
import car from './img/car.png';
import logo from './img/logo.jpeg';
import './App.css';
import DisplayMatrix from './DisplayMatrix'

class App extends Component {

    handleClick() {
        this.setState({ image : car });
        console.log(this);
    }

    render() {
    return (
      <div className="App">
        <DisplayMatrix source={logo} width={100} height={20} />
      </div>
    );
    }

    }

export default App;
