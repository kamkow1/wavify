import './LoginForm.scss';
import React from 'react';
import axios from 'axios'
import { GLOBAL_STATE } from '../global.state';
import { Navigate } from 'react-router-dom';

interface IState { 
    login: string,
    password: string,

    redirect: boolean
}

export default class LoginForm extends React.Component<any, IState> {
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
            GLOBAL_STATE.TOKEN = res.data.token;

            console.log(res.data.token);

            // request user profile
            axios.get('/api/user/get-profile-info', {
                headers: {
                    'Authorization': `Bearer ${GLOBAL_STATE.TOKEN}`
                }
            }).then(res => {
                GLOBAL_STATE.CURRENT_USER = res.data;
                    
                this.setState({...this.state, redirect: true});

                console.log(this.state);
            });
        });

        console.log(this.state);
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