import React, { Component } from 'react';
import Nav from "../nav"
import { Link, animateScroll as scroll } from "react-scroll";

class Home extends Component {
    state = {
        imgLoaded:false,
        imgUrl:"",
        title:"",
        explanation:"",
    }


    componentDidMount(){
        fetch("https://api.nasa.gov/planetary/apod?api_key=3lAiOi562emtnie1O6cdo43rupWcM8idQryj7g5E")
            .then(res => res
            .json()).then(json => {
                console.log(json);
                this.setState({
                    imgLoaded: true,
                    imgUrl: json.url,
                    title: json.title,
                    explanation: json.explanation
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
                        <a href="/explore" className="primary-button">Explore</a>
                        <Link 
                            className="secondary-button" 
                            smooth={true}
                            duration={500} 
                            to="todayImage">Image of the day
                        </Link>
                    </div>
                    
                </header>
                
                <div className="page-header">
                    <h3>Image of the day</h3>
                </div>
                
                {this.showImage()}

                
            </div>
            
        );
    }

    showImage(){
        if(this.state.imgLoaded == true){
            return (
                <div id="todayImage" className="todayImage padding">
                    <h4>{this.state.title}</h4>
                    <div>
                        <img src={this.state.imgUrl}/>
                        <p>{this.state.explanation}</p>
                    </div>
                    
                </div>
                
            )
        }
        return null
        
    }
}
 
export default Home;