import './LoginForm.scss';
import React from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { UserStore } from '../store';

interface IState { 
    login: string,
    password: string,

    redirect: boolean
}

export default class LoginForm extends React.Component<{ store: UserStore }, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            login: '',
            password: '',

            redirect: false
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, login: e.target.value});
    }

    handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, password: e.target.value});
    }

    handleSubmit() {

        // request token from server
        axios.post('/api/user/login', {
            login: this.state.login,
            password: this.state.password
        }).then(res => {
            localStorage.setItem("TOKEN", res.data.token);

            console.log(res.data.token);

            // request user profile
            axios.get('/api/user/get-profile-info', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("TOKEN")}`
                }
            }).then(res => {  
                this.props.store.setCurrentUser(res.data); 
                this.setState({...this.state, redirect: true});
            });
        });
    }

    render () {
        if (this.state.redirect) return <Navigate to='/' />;

        return (
            <div id="form-wrapper">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label>login</label>
                        <input 
                            type="text" 
                            id="login" 
                            className="form-control" 
                            placeholder="wpisz login" 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleLoginChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>hasło</label>
                        <input 
                            type="text" 
                            id="password" 
                            className="form-control" 
                            placeholder="wpisz hasło" 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handlePasswordChange(e)}/>
                    </div>
    
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-outline-primary" 
                            onClick={this.handleSubmit}>
                                zaloguj
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}