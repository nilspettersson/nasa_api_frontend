import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <nav>
                <a className="title" href="/nasa_api_frontend/home">NASA EXPLORER</a>
                <a className="link" href="/nasa_api_frontend/home">Home</a>
                <a className="link" href="/nasa_api_frontend/explore">Explore</a>
            </nav>
        );
    }
}
 
export default Nav;