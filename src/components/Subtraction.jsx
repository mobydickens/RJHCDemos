import React, { Component } from 'react';

class Subtraction extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            subtraction: ""
        }
    }

    changeNum1 = (value) => {
       this.setState({
            num1: Number(value)
       }) 
    }

    changeNum2 = (value) => {
        this.setState({
            num2: Number(value)
        }) 
     }

    subtract = (num1, num2) => {
        this.setState({
            sum: num1 + num2,
            num1: "",
            num2: ""
        })
    }

    render() {
        return(
            <div className="demo-box">
                <h2>Calculate the Sum</h2>
                <input type="text" onChange={ (e) => this.changeNum1(e.target.value) } value={ this.state.num1 }/><br/>
                - <br/> 
                <input type="text" onChange={ (e) => this.changeNum2(e.target.value) } value={ this.state.num2 }/><br/>
                <button className="btn btn-primary" onClick={ () => this.add(this.state.num1, this.state.num2) }>Calculate!</button>
                <div className="results">{ this.state.sum }</div>
            </div>
        )
    }
}

export default Subtraction;