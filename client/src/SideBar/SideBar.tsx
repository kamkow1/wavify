import { MyAccountMenu } from './MyAccountMenu/MyAccountMenu';
import './SideBar.scss';
import React from 'react';
import Collapse from 'react-bootstrap/Collapse';

interface IState {
    isAccountMenuOpen: boolean;
}

export class SideBar extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            isAccountMenuOpen: false
        };

        this.toggleOnAccountMenu = this.toggleOnAccountMenu.bind(this);
        this.toggleOffAccountMenu = this.toggleOffAccountMenu.bind(this);
    }

    toggleOnAccountMenu() {
        this.setState({...this.state, isAccountMenuOpen: true});
    }

    toggleOffAccountMenu() {
        this.setState({...this.state, isAccountMenuOpen: false});
    }

    render() {
        return(
            <div>
                <div className='collapse d-lg-block sidebar' id='sidebar'>
                     <div className='position-sticky'>
                             <h3 id='sidebar-header'>
                                 wavify
                                 <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-music-note-list" id='sidebar-logo' viewBox="0 0 16 16">
                                     <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                     <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                                     <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                                     <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                                 </svg>
                             </h3>
     
                             <ul className='list-group list-group-flush mx-3 mt-4'>
                                 <li className='list-group-item list-group-item-action 
                                     py-2 ripple sidebar-element border-radius'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell-fill sidebar-element-icon" viewBox="0 0 16 16">
                                         <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                     </svg>
     
                                     powiadomienia
                                 </li>
                                 <li className='list-group-item list-group-item-action 
                                     py-2 ripple sidebar-element border-radius'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search sidebar-element-icon" viewBox="0 0 16 16">
                                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                     </svg>
     
                                     szukaj
                                 </li>
                                 <li className='list-group-item list-group-item-action 
                                     py-2 ripple sidebar-element border-radius'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-collection-fill sidebar-element-icon" viewBox="0 0 16 16">
                                         <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                                     </svg>
     
                                     biblioteka
                                 </li>
                                 <li className='list-group-item list-group-item-action 
                                     py-2 ripple sidebar-element border-radius'>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-sliders sidebar-element-icon" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                                     </svg>
     
                                     ustawienia
                                 </li>
                                 <div onMouseEnter={this.toggleOnAccountMenu} onMouseLeave={this.toggleOffAccountMenu}>
                                    <li className='list-group-item list-group-item-action 
                                        py-2 ripple sidebar-element border-radius'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill sidebar-element-icon" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
        
                                        moje konto
                                    </li>

                                    <Collapse in={this.state.isAccountMenuOpen}>
                                        <div>
                                            <MyAccountMenu />
                                        </div>
                                    </Collapse>
                                 </div>
                             </ul>
                     </div>
                 </div>
            </div>
        );
    }
}