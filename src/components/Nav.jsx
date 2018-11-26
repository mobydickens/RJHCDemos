import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <span className="navbar-brand mb-0 h1">RJHC Demos</span>
                    <div className="navigation">
                        <NavLink to="/" activeClassName="active" className="nav-links" exact>Home</NavLink>
                        <NavLink to="/demos" activeClassName="active" className="nav-links">Demos</NavLink>
                        <NavLink to="/about" activeClassName="active" className="nav-links">About</NavLink>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;