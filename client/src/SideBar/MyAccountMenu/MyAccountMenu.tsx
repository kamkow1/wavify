import { observer } from 'mobx-react';
import React from 'react';
import './MyAccountMenu.scss';

@observer
export default class MyAccountMenu extends React.Component<{ usernameToDisplay: string | undefined }, {}>{
    render() {
        return(
            <ul className="list-group" id="menu-box">
                <li className="list-group-item" id="header-item">
                    <span className="display-profile">wyświetl profil </span>
                    <span className="display-username">{ this.props.usernameToDisplay !== undefined && this.props.usernameToDisplay }</span>
                </li>
    
                <li className="list-group-item bg-white">wyloguj</li>
            </ul>
        );
    }
}