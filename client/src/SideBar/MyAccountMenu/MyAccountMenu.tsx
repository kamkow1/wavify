import { observer } from 'mobx-react';
import React from 'react';
import { UserStore } from '../../store';
import './MyAccountMenu.scss';

@observer
export default class MyAccountMenu extends React.Component<{ store: UserStore }, {}>{
    constructor(props: any) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.store.resetCurrentUser();
        localStorage.clear();
    }

    render() {
        return(
            <ul className="list-group" id="menu-box">    
                <li className="list-group-item logout"
                    onClick={this.handleLogout}>
                    wyloguj
                </li>
            </ul>
        );
    }
}