import React, { Component } from 'react';
import './DisplayMatrix.css';

class DisplayMatrix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pixels: [],
            width: props.width,
            height: props.height,
            content: document.createElement("img"),
            source: props.source,
        };
        
        this.loadImagePixels();

        // TODO: CHECK HOW TO INTEGRATE DIFFERENT TYPES OF INPUTS THROUGH THE PROPS
    }
    render() {
        var displayMatrix = [];
        for (var index = 0; index < this.state.pixels.length; index++) {
            if (index % this.state.width == 0) {
                displayMatrix.push(<br />);
            }
            displayMatrix.push(Pixel(this.state.pixels[index]));
        }
        return (displayMatrix);
    }

    loadImagePixels() {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');
        this.state.content.setAttribute("src", this.state.source);
        this.state.content.setAttribute("width", "100");
        this.state.content.setAttribute("height", "100");
        
        canvas.height = 100;
        canvas.width = 100;

        document.body.appendChild(this.state.content);
        document.body.appendChild(canvas);
        context.fillRect(0, 0, 10, 10);
        let frame = context.getImageData(0, 0, 100, 100);
        for (var index = 0; index < (this.state.width*this.state.height); index += 4){
            this.state.pixels.push([
                frame.data[index],      // Red
                frame.data[index+1],    // Green
                frame.data[index+2],    // Blue
                frame.data[index+3]     // Alpha
            ]);
        }

    }
    
}    

function Pixel(rgba) {
    return (
        <button className="pixel" style={{backgroundColor: ('rgba(' +
                                                            rgba[0] + ', ' +
                                                            rgba[1] + ', ' +
                                                            rgba[2] + ', ' +
                                                            rgba[3]
                                                            )
                                        }}
        >
        </button>
        );
}

export default DisplayMatrix;
