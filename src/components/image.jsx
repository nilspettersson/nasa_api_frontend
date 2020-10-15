import React, { Component } from 'react';

class Image extends Component {
    state = {  }
    render() { 
        return (
            <div className="image">
                <img src={this.props.href} />
            </div>
        );
    }
}
 
export default Image;