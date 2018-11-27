import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.jsx';
import Demos from './components/Demos.jsx';
import About from './components/About.jsx';
import Demo from './components/Demo.jsx';
import Math from './components/Math.jsx'
// import MathDemos from './components/MathDemos.jsx';
import NotFound from './components/NotFound.jsx';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route component={ Home } exact path="/" />
            <Route component={ Demos } path="/demos"/>
            <Route component={ About } path="/about" />
            <Route component={ Demo } path="/demo/:name" />
            <Route component={ Math } path="/math/:name" exact />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
