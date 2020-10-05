import React, { Component } from 'react';
import Nav from "../nav"

class Home extends Component {
    state = {
        imgLoaded:false,
        imgUrl:"",
    }


    componentDidMount(){
        fetch("https://api.nasa.gov/planetary/apod?date=2020-09-06&api_key=3lAiOi562emtnie1O6cdo43rupWcM8idQryj7g5E")
            .then(res => res
            .json()).then(json => {
                console.log(json);
                this.setState({
                    imgLoaded: true,
                    imgUrl: json.url
                })
            });
    }

    render() { 
        return (
            <div>
                <Nav page={"home"} />

                <header>
                    <h1 className="header">NASA api Explorer</h1>
                    <h3 className="header2">Explore NASA images and more</h3>
                    <div className="buttons">
                        <a className="primary-button">Explore</a>
                        <a className="secondary-button">Image of the day</a>
                    </div>
                    
                </header>
                

                {/*this.showImage()*/}
            </div>
            
        );
    }

    showImage(){
        if(this.state.imgLoaded == true){
            return (
                <img src={this.state.imgUrl}/>
            )
        }
        return null
        
    }
}
 
export default Home;