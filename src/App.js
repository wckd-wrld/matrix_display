import React, { Component } from 'react';
import car from './img/car.png';
import logo from './img/logo.jpeg';
import './App.css';
import DisplayMatrix from './DisplayMatrix'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: logo,
        };
    }

    handleClick() {
        this.setState({ image : this.state.image == car ? logo : car });
    }

    render() {
    


    return (
      <div className="App">
          <DisplayMatrix source={this.state.image} width={100} height={20} />
          <button onClick={this.handleClick.bind(this)}>
              test
          </button>
      </div>
    );
    }

    }

export default App;
