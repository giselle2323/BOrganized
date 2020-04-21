import React, { Component } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import isAuthenticated from '../services/decodeToken';
import jwt from 'jsonwebtoken';
export default class Todo extends Component {

    constructor() {
        super();

        this.state = {

            name: '',
            categories: [],
            select: '',
            category: '',
            category_id: '',
            user_id: '',
            status: ''


        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    handleOnChange = (event) => {
        const { value } = event.target;
        this.setState({ select: value });
        console.log(this.state.select);
    };


    handleSubmit = (event) => {
        event.preventDefault()
        let decode = isAuthenticated();
        if(!decode) {
            console.log('You cannot perform this action')
        } else {
            const data = { name: this.state.name, user_id: this.state.user_id, category_id: this.state.category_id, status: this.state.status };
            console.log(data);
            const token = localStorage.getItem('data');
            console.log(token);
            fetch('http://localhost:5000/api/v1/item/createitem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                const { exp } = jwt.decode(token);
                if (Date.now() >= exp * 1000){
                    console.log('expired');
                }
                console.log('Success: You are logged in', data);
            })
            .catch((error) => {
                console.error('Error: There was an error trying to login', error.message);
            });
        }
    }

    componentDidMount() {
        let allCategories = [];

        fetch('http://localhost:5000/api/v1/category/getcategory', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                allCategories = data.map((category) => {
                    return category;
                })
                console.log('Success: You are logged in', data);
                this.setState({
                    categories: allCategories,
                })
            })

            .catch((error) => {
                console.error('Error: There was an error trying to login', error.message);
            });
    }


    render() {
        let allCategories = this.state.categories;
        let options = allCategories.map((category) =>
            <option key={category._id} value={category.name}>{category.name}</option>
        );
        return (
            <div style={{ marginTop: 50 }}>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="name"
                        name="name"
                        value={this.state.name}
                        handleChange={this.handleInputChange}
                        label="name"
                        required
                    />
                    <select onChange={this.handleOnChange} value={this.state.select}>
                        {options}
                    </select>
                    <Button
                        value="Add Todo"
                    />
                </form>
            </div>
        )
    }
}