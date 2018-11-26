import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sum from './Sum.jsx';
import EvenOdd from './EvenOdd.jsx';

class Demo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            demos: [
                <Sum />,
                <EvenOdd />
            ],
            index: 0
        }
    }

    render() {

        console.log(this.props.match.params);

        return(
            <div className="container">
                <div className="demos">
                    {this.state.demos.map(demo => {
                        if(this.props.match.params.name == demo) {
                            return(
                                <div>
                                    {demo}
                                </div>
                        )}
                    })}
                </div>
                <Link to="/demos"><button>Back</button></Link>
            </div> 
        )
    }
}

export default Demo;