import { observer } from 'mobx-react';
import React from 'react';
import './MyAccountMenu.scss';

@observer
export default class MyAccountMenu extends React.Component<{ usernameToDisplay: string | undefined }, {}>{
    render() {
        return(
            <ul className="list-group" id="menu-box">
                <li className="list-group-item header-item">wyświetl profil { this.props.usernameToDisplay !== undefined && this.props.usernameToDisplay }</li>
    
                <li className="list-group-item bg-white">wyloguj</li>
            </ul>
        );
    }
}