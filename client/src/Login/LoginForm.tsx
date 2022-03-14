import './LoginForm.scss';
import React from 'react';
import axios from 'axios'

interface IState { 
    login: string,
    password: string
}

export class LoginForm extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            login: '',
            password: ''
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
            sessionStorage.setItem("TOKEN", res.data.token);

            console.log(res.data.token);

            // request user profile
            axios.get('/api/user/get-profile-info', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("TOKEN")}`
                }
            }).then(res => {
                console.log(res.data);
            });
        });

        console.log(this.state);
    }

    render () {
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