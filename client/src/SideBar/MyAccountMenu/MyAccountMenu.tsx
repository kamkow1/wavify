import { observer } from 'mobx-react';
import React from 'react';
import './MyAccountMenu.scss';

@observer
export default class MyAccountMenu extends React.Component<{}, {}>{
    render() {
        return(
            <ul className="list-group" id="menu-box">    
                <li className="list-group-item logout">wyloguj</li>
            </ul>
        );
    }
}