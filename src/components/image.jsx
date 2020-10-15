import React, { Component } from 'react';

class Image extends Component {
    state = {  }
    render() { 
        return (
            <div className="image">
                <img src={this.props.href} />
                <p className="image-text">{this.props.title}</p>
            </div>
        );
    }
}
 
export default Image;