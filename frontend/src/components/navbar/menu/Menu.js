import React, { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAdminContext } from '../../../hooks/useAdminContext';
import { useLogout } from '../../../hooks/useLogout';
import './Menu.scss';

const Modal = React.lazy(() => import('../../modal/Modal'));

const items = [
    { path: '/', textContent: 'home' }, 
    { path: '/skills', textContent: 'skills' }, 
    { path: '/projects', textContent: 'projects' }, 
    { path: '/documents', textContent: 'documents' }, 
    { path: '/contact', textContent: 'contact' }
];

export default function Menu() {
    // const menuNav = React.createRef();
    const [close, setClose] = useState(true);
    const { logout } = useLogout();
    const { admin } = useAdminContext();
    
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
        setClose(true);
    }
    
    return (
        <nav className={`menu ${close ? '' : 'show'}`}> 
            <div className={`menu-btn ${!close ? 'close' : ''}`} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
               
            <Suspense fallback={<div>Loading...</div>}>
                <Modal className={`${close ? '' : 'show'}`}>
                    <div className="menu-nav">
                        <ul className={`user ${close ? 'show' : ''}`}>
                            {!close && items.map((item) => (
                                <li key={item.textContent} className="nav-item current" onClick={openPage}>
                                    <NavLink to={item.path} className="nav-link">{item.textContent}</NavLink>
                                </li>                            
                            ))}
                        </ul>
                        
                    {admin && (
                        <ul className={`admin ${close ? 'show' : ''}`}>
                            <li className='nav-item'>
                                <span className="name">{admin.username}</span> &nbsp;
                                <button id="logout" className='logout nav-link' onClick={handleLogout}>Log out</button>                    
                            </li>                                                 
                        </ul>                
                    )}                                    
                    </div>
                </Modal>
            </Suspense>
        </nav>
    );
}