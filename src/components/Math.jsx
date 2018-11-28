import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import demoArray from './demoArray.js';

class Math extends Component {

  constructor(props) {
    super(props);
      this.state = {
        mathDemos: demoArray,
        num1: "",
        num2: "",
        result: "",
        error: ""
      }
  }

  changeNum1 = (value) => {
    if(isNaN(value)) {
      this.setState({
        num1: "",
        num2: "",
        error: "Only input numbers!"
      })
    } else {
    this.setState({
         num1: value,
         error: ""
    }) 
  }
 }

 changeNum2 = (value) => {
  if(isNaN(value)) {
    this.setState({
      num1: "",
      num2: "",
      error: "Only input numbers!"
    })
  } else {
     this.setState({
         num2: value
     }) 
    }
  }

  sum = (num1, num2) => {
    if (num1 === "" || num2 === "") {
      this.setState({
        num1: "",
        num2: "",
        error: "Please input valid numbers!"
      })
    } else {
      let sum = parseInt(num1) + parseInt(num2);
      this.setState({
          result: sum,
          num1: "",
          num2: "",
          error: ""
      })
    }
  }

  difference = (num1, num2) => {
    if (num1 === "" || num2 === "") {
      this.setState({
        num1: "",
        num2: "",
        error: "Please input valid numbers!"
      })
    } else {
      let difference = parseInt(num1) - parseInt(num2);
      this.setState({
        result: difference,
        num1: "",
        num2: "",
        error: ""
      })
    }
  }

  divide = (num1, num2) => {
    if (num1 === "" || num2 === "") {
      this.setState({
        num1: "",
        num2: "",
        error: "Please input valid numbers!"
      })
    } else {
      let division = parseInt(num1) / parseInt(num2);
      this.setState({
        result: division,
        num1: "",
        num2: "",
        error: ""
      })
    }
  }

  multiply = (num1, num2) => {
    if (num1 === "" || num2 === "") {
      this.setState({
        num1: "",
        num2: "",
        error: "Please input valid numbers!"
      })
    } else {
      let multiply = parseInt(num1) * parseInt(num2);
      this.setState({
        result: multiply,
        num1: "",
        num2: "",
        error: ""
      })
    }
  }

  resetResults = () => {
    this.setState({
      results: ""
    })
  }

  render() {
    let { params } = this.props.match;
    let { num1, num2 } = this.state;
    return(
      <div className="container">
        <div className="mathbox">
          <div className="aside">
            {this.state.mathDemos.map((demo, index) => {
              if(demo.componentName === "mathDemos") {
                return(
                  <div key={index}>
                    <Link
                      // onClick={ this.resetResults() } 
                      to={`/math/${demo.name}`}>{demo.name}
                    
                    </Link>
                  </div>
                )
              }
            })}
          </div>
          <div className="demo-box">
              <h2>Basic Math Problems</h2>
              <h3>{params.name}</h3>
              <input 
                type="text"
                onChange={ (e) => this.changeNum1(e.target.value) }
                value={ this.state.num1 }
              /><br/>
              {params.name === "Sum" ? "+" 
                : params.name === "Difference" ? "-" 
                : params.name === "Division" ? "/" 
                : params.name === "Multiply" ? "*" 
                : ""}
              <br/>
              <input 
                type="text"
                onChange={ (e) => this.changeNum2(e.target.value) }
                value={ this.state.num2 }
              /><br/>
              <button 
                className="btn btn-primary"
                onClick={ params.name === "Sum" ? () => this.sum(num1, num2) 
                            : params.name === "Difference" ? () => this.difference(num1, num2)
                            : params.name === "Division" ? () => this.divide(num1, num2)
                            : params.name === "Multiply" ? () => this.multiply(num1, num2) : "" }>
                Calculate!
              </button>
              <div className="results">{ this.state.error !== "" ? this.state.error : this.state.result }</div>
          </div> 
        </div>
        <Link to="/demos"><button>Back</button></Link>
      </div>
    )
  }
}

export default Math;