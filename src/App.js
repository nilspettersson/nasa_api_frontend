import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/pages/home"
import Explore from "./components/pages/explore"
import NotFound from "./components/pages/notFound"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/explore" component={Explore}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
