import React, { Component } from 'react';

class Image extends Component {
    state = {  }
    render() { 
        return (
            <div className="image">
                <img src={this.props.href} />
                <p className="image-title">{this.props.title}</p>
                <p className="image-date">{this.props.date.substring(0, 10)}</p>
            </div>
        );
    }
}
 
export default Image;