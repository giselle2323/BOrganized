import React, { Component } from 'react';
import { Switch, Route,  BrowserRouter as Router } from "react-router-dom"
import './styles.css';
import Homepage from './pages/homepage';
import Signup from './pages/signup';
import Login from './pages/login';
import Todo from './pages/todo';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/todo" component={Todo} />

                </Switch>
            </Router>
        );
    }
}

export default App;
