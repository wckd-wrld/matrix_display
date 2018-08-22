import React, { Component } from 'react';
import './DisplayMatrix.css';

class DisplayMatrix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pixels: Array(props.width*props.height),
            width: props.width,
            height: props.height,
        };
    }
    render() {
        var displayMatrix = [];
        for (var index = 0; index < this.state.height; index++) {
            for (var index2 = 0; index2 < this.state.width; index2++) {
                displayMatrix.push(Pixel());
            }
            displayMatrix.push(<br />);
        }

        return (displayMatrix);
    }

    updatePixels() {
    }
}

function Pixel(props) {
    return (
        <button className="pixel" style={{backgroundColor: "#4CAF50",}}>
        </button>
        );
}

export default DisplayMatrix;
