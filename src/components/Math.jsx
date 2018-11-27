import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import demoArray from './demoArray.js';

class Math extends Component {

  constructor(props) {
    super(props);
      this.state = {
        mathDemos: demoArray
      }
  }

  render() {
    console.log(this.props.match.params.name, "in math component")
    return(
      <div className="mathbox">
        <div className="aside">
          {this.state.mathDemos.map((demo, index) => {
            if(demo.componentName === "mathDemos") {
              return(
                <div key={index}>
                  <Link to={`/math/${demo.name}`}>{demo.name}</Link>
                </div>
              )
            }
          })}
        </div>
        <div className="demo-box">
            <h2>Basic Math Problems</h2>
            <h3>{this.props.match.params.name}</h3>
        </div>
      </div>
    )
  }
}

export default Math;