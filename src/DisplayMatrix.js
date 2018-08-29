import React, { Component } from 'react';
import './DisplayMatrix.css';

class DisplayMatrix extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pixelData: new Array(props.width*props.height).fill(null),
            width: props.width,
            height: props.height,
        };
        
        this.loadContent(props.source);
        // TODO: CHECK HOW TO INTEGRATE DIFFERENT TYPES OF INPUTS THROUGH THE PROPS
        // TODO: Need to find a tidy place to store the image, do I load it every time it changes,
        // if so it wouldn't need tos stay in state it could just be loaded with ever call to
        // loadFramePixels();
    }


    render() {
        return (this.state.pixelData.map(_ => {
            return(
                _ == null ? null : Pixel(_.red, _.blue, _.green, _.alpha)
            );
        }));
    }
    
    componentWillReceiveProps(nextProps) {
        this.loadContent(nextProps.source);
    }

    loadContent(content_URL) {
        var frame = new Image();
        frame.src = content_URL;
        frame.parent = this;
        frame.onload = (function() {
            this.parent.loadFramePixels(this);
        })
        
        frame = null; // Garbage Collection

    }

    loadFramePixels(frame) {
        var canvas = document.createElement("canvas");
        canvas.height = this.state.height;
        canvas.width = this.state.width;
        var context = canvas.getContext('2d');
        console.log(frame);
        context.drawImage(frame, 0, 0, this.state.width, this.state.height);
        let RGBAMatrix = context.getImageData(0, 0, this.state.width, this.state.height);

        console.log(RGBAMatrix.data);

        var index = 0;  // Can't use normal array functions because this is a Uint8ClampedArray
        var newPixelData = this.state.pixelData.map(_ => {
            return ({
                red   : RGBAMatrix.data[index++],
                green : RGBAMatrix.data[index++],
                blue  : RGBAMatrix.data[index++],
                alpha : RGBAMatrix.data[index++]
            });
        });
        console.log(newPixelData);
        this.setState({ pixelData : newPixelData.slice()});


    }
    
}    

function Pixel(r, g, b, a) {
    return (
        <div className="pixel" style={{backgroundColor: ('rgba(' +
                                                            r + ', ' +
                                                            g + ', ' +
                                                            b + ', ' +
                                                            a + ')'
                                                            )
                                        }}>
        </div>
        );
}

export default DisplayMatrix;
