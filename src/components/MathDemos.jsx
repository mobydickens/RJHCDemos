//mathdemos will have access to the URL which contains this.props.match.params.name

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MathDemos extends Component {

    constructor(props) {
        super(props);
          this.state = {
            title: "Calculate the Sum"
          }
    }

    render() {
        return(
          <div className="mathbox">
            <div className="aside">
              <Link to='/'></Link>
              <Link></Link>
              <Link></Link>
              <Link></Link>
            </div>
            <div className="demo-box">
                <h2>{this.state.title}</h2>
            </div>
          </div>
        )
    }
}

export default MathDemos;