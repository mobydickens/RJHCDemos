import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pages: [
        "Welcome", 
        // <EvenOdd />, 
        // <Sum />,
        // <Palindrome />
      ]
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <h1 className="app-title">React JavaScript HTML CSS Demos</h1>
          <button type="button" className="homepage-demo btn btn-warning">Try a Demo!</button>
        </div>
      </div>
      
    );
  }
}

export default App;
