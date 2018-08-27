import React, { Component } from 'react';
import './DisplayMatrix.css';

class DisplayMatrix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pixels: [],
            width: props.width,
            height: props.height,
            frame: new Image(200,100),
        };
        
        this.state.frame.src = props.source;
        this.state.frame.onload = (function() {
            this.loadFramePixels();
        }).bind(this);
        // TODO: CHECK HOW TO INTEGRATE DIFFERENT TYPES OF INPUTS THROUGH THE PROPS
    }


    render() {
        var displayMatrix = [];
        for (var index = 0; index < this.state.pixels.length; index++) {
            if (index % this.state.width === 0) {
                displayMatrix.push(<br />);
            }
            displayMatrix.push(Pixel(this.state.pixels[index]));
        }
        return (displayMatrix);
    }


    loadFramePixels() {
        var canvas = document.createElement("canvas");
        canvas.height = this.state.height;
        canvas.width = this.state.width;
        var context = canvas.getContext('2d');
        context.drawImage(this.state.frame, 0, 0, this.state.width, this.state.height);

        let RGBAMatrix = context.getImageData(0, 0, this.state.width, this.state.height);
        var newPixels = []

        for (var index = 0; index < (this.state.width*this.state.height); index++){
            var localIndex = (index*4);
            newPixels.push([
                RGBAMatrix.data[localIndex],      // Red
                RGBAMatrix.data[localIndex+1],    // Green
                RGBAMatrix.data[localIndex+2],    // Blue
                RGBAMatrix.data[localIndex+3]     // Alpha
            ]);
        }

        this.setState({ pixels : newPixels });

    }
    
}    

function Pixel(rgba) {
    return (
        <button className="pixel" style={{backgroundColor: ('rgba(' +
                                                            rgba[0] + ', ' +
                                                            rgba[1] + ', ' +
                                                            rgba[2] + ', ' +
                                                            rgba[3] + ')'
                                                            )
                                        }}
        >
        </button>
        );
}

export default DisplayMatrix;
