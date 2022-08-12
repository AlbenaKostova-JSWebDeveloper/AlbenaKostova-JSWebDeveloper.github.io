import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const items = [
    { path: '/', textContent: 'home' }, 
    { path: '/skills', textContent: 'skills' }, 
    { path: '/projects', textContent: 'projects' }, 
    { path: '/documents', textContent: 'documents' }, 
    { path: '/contact', textContent: 'contact' }
];

export default function Menu() {
    const menuNav = React.createRef()
    const [close, setClose] = useState(true);
    
    function toggleMenu(e) {
        if (close) {
            setClose(false);
        } else {
            setClose(true);
        }
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
                    <li key={item.textContent} className="nav-item current">
                        <NavLink to={item.path} className="nav-link">{item.textContent}</NavLink>
                    </li>                    
                ))}
            </ul>           
        </nav>
    );
}