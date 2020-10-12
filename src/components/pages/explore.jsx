import React, { Component } from 'react';
import Nav from "../nav"

class Explore extends Component {
    state = {
        loaded:false,
        images:{}
    }

    componentDidMount(){
        fetch("https://images-api.nasa.gov/search?q=apollo%2011&media_type=image")
            .then(res => res
            .json()).then(json => {
                console.log(json.collection.items);
                let images = json.collection.items;
                this.setState({
                    loaded: true,
                    images:images
                });
            });
    }

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
                {this.showImages()}


            </div>
            
        );
    }

    showImages(){
        if(this.state.loaded){
            return(
                <div className="grid padding">
                    {this.state.images.map(image => 
                    <div className="image">
                        <img src={image.links[0].href} />
                    </div>
                    )}
                </div>
            )
        }
    }
}
 
export default Explore;