import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <nav>
                <a className="title" href="/home">NASA EXPLORER</a>
                <a className="link" href="/home">Home</a>
                <a className="link" href="/explore">Explore</a>
            </nav>
        );
    }
}
 
export default Nav;