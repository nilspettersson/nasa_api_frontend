import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <nav>
                <a href="/home">Home</a>
                <a href="/explore">Explore</a>
            </nav>
        );
    }
}
 
export default Nav;