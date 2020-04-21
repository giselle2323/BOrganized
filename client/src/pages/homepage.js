import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import IntroContainer from '../components/IntroContainer';

class Homepage extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="intro-container">
                    <NavBar />
                    <IntroContainer />
                </div>
            </div>
        );
    }
}

export default Homepage;
