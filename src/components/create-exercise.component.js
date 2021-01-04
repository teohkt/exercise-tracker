import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props);

        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeInformation = this.onChangeInformation.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: '',
            date: new Date(),
            users: []
        }
    }

    
    componentDidMount() {
        // this.setState({ 
        //   users: ['test user 1', 'test user 2'],
        //   username: 'test user'
        // });
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                this.setState({ 
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    onChangeInformation(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    onChangeDuration(e) {
        const { name, value } = e.target;
        const num = parseInt(value, 10);
        if (isNaN(num)) {
            this.setState({ [name]: ''})
        }
        else {
            this.setState({ [name]: num})
        }
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };
        console.log(exercise);
        axios.post('http://localhost:5000/exercise/add', exercise)
            .then(res => console.log(res.data))
        window.location = '/';
    }

    render(){
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="username">Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            id="username"
                            value={this.state.username}
                            onChange={this.onChangeInformation}>
                            {
                                this.state.users.map(function(user){
                                    return <option key={user} value={user}>{user}</option>;
                                })
                            }
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="description">Description: </label>
                        <input type="text" 
                            className="form-control" 
                            name="description"
                            value={this.state.description}
                            onChange={this.onChangeInformation}
                        />
                    </div>
                    <div class="form-group">
                        <label for="duration">Duration (in Minutes): </label>
                        <input 
                            type="text" 
                            name="duration"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                            />
                    </div>
                    <div class="form-group">
                        <label for="description">Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}