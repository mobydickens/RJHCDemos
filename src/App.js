import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Sum from './components/Sum.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pages: [
        "Welcome",
         <Sum />, 
        // <EvenOdd />, 
        // <Palindrome />
      ],
      pageIndex: 1
    }
  }
  render() {
    return (
      <div>
        <Nav />
        {this.state.pageIndex === 0 ? 
          <div className="container">
            <h1 className="app-title">React JavaScript HTML CSS Demos</h1>
            <button type="button" className="homepage-demo btn btn-warning">Try a Demo!</button>
          </div> 
          : <Sum />}
      </div>
      
    );
  }
}

export default App;
