import React, { Component } from 'react';
import Nav from "../nav"

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Nav page={"home"} />
                <p>home</p>
            </div>
            
        );
    }
}
 
export default Home;