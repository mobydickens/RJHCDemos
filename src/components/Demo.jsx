import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import demoArray from './demoArray';

class Demo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            demos: demoArray
        }
    }

    render() {

        return(
            <div className="container">
                <div className="demos">
                    {this.state.demos.map(demo => {
                        if(this.props.match.params.name === demo.name) {
                            return(
                                <div key={demo.name}>
                                    {demo.component}
                                </div>
                            )
                        }
                    })}
                </div>
                <Link to="/demos"><button>Back</button></Link>
            </div> 
        )
    }
}

export default Demo;

//how to get names to match while looping over the components. Do I _have_ to use the names themselves in state? Or can I use the components?
// demos[ {component: etc, name: etc}, ]