import React, { Component } from 'react';

class EvenOdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numbers: "",
            even: [],
            odd: []
        }
    }

    onInputChange = (values) => {
        this.setState({
            numbers: values
        })
    }

    separate = (numbers) => {
        let split = numbers.split(/[, ]+/);
        let evens = [];
        let odds = [];
        for(let i=0; i<split.length; i++) {
            if(Number(split[i]) % 2 === 0) {
                evens.push(split[i]);
            } else {
                odds.push(split[i]);
            }
        }
        this.setState({
            even: evens.join(', '),
            odd: odds.join(', ')
        })
    }

    render() {
        return(
            <div className="demo-box">
                <h2>Separate Evens and Odds</h2>
                <input type="text" onChange={ (e) => this.onInputChange(e.target.value) } value={ this.state.numbers }/><br/>
                <button className="btn btn-primary" onClick={ () => this.separate(this.state.numbers) }>Calculate!</button>
                <div className="results">Even numbers: { this.state.even }</div>
                <div className="results">Odd numbers: { this.state.odd }</div>
            </div>
        )
    }
}

export default EvenOdd;