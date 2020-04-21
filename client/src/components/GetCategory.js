import React, { Component } from 'react';
export default class GetCategory extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            select: '',
        }
    }
    onChange = (event) => {
        const { value } = event.target;
        this.setState({ select: value });
        console.log('mnf k,mndfm kdfnmdf');
    };

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
                categories: allCategories
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
        return(
            <div>
                <select onChange={this.onChange} value={this.state.select}>
                    {options}
                </select>
            </div>
        )
    }
}