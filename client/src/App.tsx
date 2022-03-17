import React from 'react';
import { Navigate } from 'react-router';
import './App.css';
import { UserStore } from './store';

export class App extends React.Component<{ store: UserStore }, {}> {

  render () {
    if (!this.props.store.currentUser.login) return (<Navigate to="/login" />);

    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
