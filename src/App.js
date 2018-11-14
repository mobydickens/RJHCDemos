import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pages: [
        "Welcome", 
        <EvenOdd />, 
        <Sum />,
        <Palindrome />
      ]
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <button class="homepage-demo">Try a Demo!</button>
      </div>
    );
  }
}

export default App;
