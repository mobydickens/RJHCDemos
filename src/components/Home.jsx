import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return(
            <div className="container">
              <h1 className="title">React JavaScript HTML CSS Demos</h1>
              <Link to="/demos">
                <button type="button" className="homepage-demo btn btn-warning">Try a Demo!</button>
              </Link>
            </div> 
        )
    }
}
export default Home;