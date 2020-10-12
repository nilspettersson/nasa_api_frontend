import React, { Component } from 'react';
import Nav from "../nav"

class Explore extends Component {
    state = {
        search:"",
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

    handleClick = () =>{
        fetch("https://images-api.nasa.gov/search?q=" + this.state.search + "&media_type=image")
            .then(res => res
            .json()).then(json => {
                console.log(json.collection.items);
                let images = json.collection.items;
                this.setState({
                    loaded: true,
                    images:images
                });
            });
    };
    handleChange = (event) =>{
        this.setState({search:event.target.value});
    };

    render() { 
        return (
            <div>
                <Nav page={"explore"} />

                <div className="menu padding">
                    <h3>Explore NASA images</h3>
                    <div className="search-container">
                        <input 
                            className="search" 
                            type="text" 
                            onChange={this.handleChange}
                        />
                        <img src="%PUBLIC_URL%/../res/search.svg" onClick={this.handleClick}/>
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
                    {this.state.images.map((image, index) => 
                    <div key={index} className="image">
                        <img src={image.links[0].href} />
                    </div>
                    )}
                </div>
            )
        }
    }
}
 
export default Explore;