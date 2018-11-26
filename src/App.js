import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.jsx';
import Demos from './components/Demos.jsx';
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import Demo from './components/Demo.jsx';

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
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
