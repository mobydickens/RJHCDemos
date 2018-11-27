import React, { Component } from 'react';

class Palindrome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            word: "",
            result: ""
        }
    }

    onChange = (value) => {
        this.setState({
            word: value
        })
    }

    palindromeCheck = (word) => {
        let regex = /([\W\d\s])+/;
        let alteredWord = word.replace(regex, '');
        let backwards = alteredWord.split('').reverse().join('');
        if(alteredWord === backwards) {
            this.setState({
                result: `${word} is a palindrome!`,
                word: ""
            })
        } else {
            this.setState({
                result: `${word} is not a palindrome!`,
                word: ""
            })
        }
    }


    render() {
        return(
            <div className="demo-box">
                <h2>Check for Palindromes</h2>
                <input type="text" onChange={ (e) => this.onChange(e.target.value) } value={ this.state.word }/><br/>
                <button className="btn btn-primary" onClick={ () => this.palindromeCheck(this.state.word) }>Test!</button>
                <div className="results">{this.state.result}</div>
            </div>
        )
    }
}

export default Palindrome;