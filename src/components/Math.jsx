import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import demoArray from './demoArray.js';

class Math extends Component {

  constructor(props) {
    super(props);
      this.state = {
        title: "Calculate the Sum",
        mathDemos: demoArray
      }
  }

  render() {

    return(
      <div className="mathbox">
        <div className="aside">
          {this.state.mathDemos.map((demo, index) => {
            if(demo.componentName === "mathDemos") {
              console.log(demo.name);
              return(
                <div key={index}>
                  <Link to={`/math/${demo.name}`}>{demo.name}</Link>
                </div>
              )
            } else {
              console.log("not a match");
            } 
          })}
        </div>
        <div className="demo-box">
            <h2>Basic Math Problems</h2>
        </div>
      </div>
    )
  }
}

export default Math;