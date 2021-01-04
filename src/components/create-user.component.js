import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeValue(e) {
        const {name, value} = e.target
        this.setState({ [name]: value})
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username
        };
        console.log(newUser);

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
            
        this.setState({username: ''})
    }

    render(){
        return (
            <div>
                <h1>Create New User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeValue}
                        />
                    </div>
                        <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}