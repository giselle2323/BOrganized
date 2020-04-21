import React, { Component } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
export default class Login extends Component {

    constructor() {
        super();

        this.state = {

            email: '',
            password: '',

        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const data = { email: this.state.email, password: this.state.password };
        console.log(data);
        fetch('http://localhost:5000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('data', data.token)
                window.location.replace("http://localhost:3000/todo");
                console.log('Success: You are logged in', data.token);
            })
            .catch((error) => {
                console.error('Error: There was an error trying to login', error.message);
            });
    }


    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleInputChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleInputChange}
                        label="password"
                        required

                    />
                    <Button
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}