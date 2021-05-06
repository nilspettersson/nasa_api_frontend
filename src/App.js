import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/pages/home"
import Explore from "./components/pages/explore"
import NotFound from "./components/pages/notFound"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/explore" component={Explore}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;