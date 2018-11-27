import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Demos extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            demos: [
                "Sum",
                "Subtraction",
                "Even and Odd",
                "Palindrome"
            ]
        }
    }

    render() {
        let demoList = this.state.demos.map((demo, i) => {
            return(
                <div key={i}>
                    <Link to={`/demo/${demo}`}>
                        <li>{demo}</li>
                    </Link>
                </div>
            )
        })
        return(
            <div className="container">
                <h2 className="demo-list title">All Demos:</h2>
                <ul className="demo-list">
                    {demoList}
                </ul>
            </div>
        )
    }
}

export default Demos;