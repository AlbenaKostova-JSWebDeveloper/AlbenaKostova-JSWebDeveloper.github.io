import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useLogout } from '../../../hooks/useLogout';
import './Menu.scss';

const items = [
    { path: '/', textContent: 'home' }, 
    { path: '/skills', textContent: 'skills' }, 
    { path: '/projects', textContent: 'projects' }, 
    { path: '/documents', textContent: 'documents' }, 
    { path: '/contact', textContent: 'contact' }
];

const adminNav = [
    { path: '/login', textContent: 'login' }, 
    { path: '/signup', textContent: 'signup' }, 
];

export default function Menu() {
    const menuNav = React.createRef()
    const [close, setClose] = useState(true);
    const { logout } = useLogout()
    
    function toggleMenu(e) {
        if (close) {
            setClose(false);
        } else {
            setClose(true);
        }
    }
    
    function openPage(e) {
        setClose(true);
    }
    
    function handleLogout () {
        logout();
    }
    
    return (
        <nav className={`menu ${close ? '' : 'show'}`}> 
            <div className={`menu-btn ${!close ? 'close' : ''}`} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>   
            
            <ul className={`menu-nav ${close ? '' : 'show'}`} ref={menuNav}>
                {!close && items.map((item) => (
                    <li key={item.textContent} className="nav-item current" onClick={openPage}>
                        <NavLink to={item.path} className="nav-link">{item.textContent}</NavLink>
                    </li>                    
                ))}
            </ul>           
            <ul className={`admin-nav ${close ? '' : 'show'}`}>
                <div id='admin-out'>
                    {adminNav && adminNav.map((item) => (
                        <li key={item.textContent} className="nav-item current" onClick={openPage}>
                            <NavLink to={item.path} className="nav-link">{item.textContent}</NavLink>
                        </li>                    
                    ))}                    
                </div>
                <div id='admin-in'>
                    <button id="logout" className='logout' onClick={handleLogout}>Log out</button>                    
                </div>
            </ul>           
        </nav>
    );
}