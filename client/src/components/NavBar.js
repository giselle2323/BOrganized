import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
                <div className="top-bar">
                    <div className="left-top-items">
                        {/* <a href="#" className="topbar-brand">Shortly</a> */}
                    </div>
                    <div className="right-top-items">
                            <Link to='/login'> Login </Link>
                            <Link to='/signup'> SignUp </Link>
                    </div>
                </div>
        )
    }
}