import React, { Component } from 'react';
import Nav from "../nav"

class Explore extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Nav page={"explore"} />

                <div className="menu padding">
                    <div className="search-container">
                        <input className="search" type="text"/>
                        <img src="%PUBLIC_URL%/../res/search.svg"/>
                    </div>
                    
                </div>

            </div>
            
        );
    }
}
 
export default Explore;