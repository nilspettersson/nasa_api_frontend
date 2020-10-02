import React from 'react';
import './App.css';
import Home from "./components/home"
import Explore from "./components/explore"
import Nav from "./components/nav"

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Explore/>
    </div>
  );
}

export default App;
