import React, { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAdminContext } from '../../../hooks/useAdminContext';
import { useLogout } from '../../../hooks/useLogout';
import './Menu.scss';

const Loading = React.lazy(() => import('../../loading/Loading'));
const Modal = React.lazy(() => import('../../modal/Modal'));
const Button = React.lazy(() => import('../../button/Button'));

const guestItems = [
    { path: '/', textContent: 'home' }, 
    { path: '/skills', textContent: 'skills' }, 
    { path: '/projects', textContent: 'projects' }, 
    { path: '/documents', textContent: 'documents' }, 
    { path: '/contact', textContent: 'contact' },
    { path: '/signup', textContent: 'sign up' }, 
    { path: '/login', textContent: 'log in' },
];

const adminItems = [
    { path: '/admin', textContent: 'admin' },
    { path: '/skills-form', textContent: 'skills-form' },
    { path: '/projects-form', textContent: 'projects-form' },
    { path: '/documents-form', textContent: 'documents-form' },
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
               
            <Suspense fallback={<Loading />}>
                <Modal className={`${close ? '' : 'show'}`}>
                    <nav className="menu-nav">
                                                
                        {admin && (
                            <ul className={`admin ${close ? 'show' : ''}`}>
                                {!close && adminItems.map((item) => (
                                    <li key={item.textContent} className="nav-item current" onClick={openPage}>
                                        <NavLink to={item.path} className="nav-link">{item.textContent}</NavLink>
                                    </li>                            
                                ))}
                                <li className='nav-item'>
                                    <span className="name">{admin.username}</span> &nbsp;
                                    <Button id="logout" className='logout nav-link' onClick={handleLogout}>
                                        Log out
                                    </Button>
                                </li>                                                 
                            </ul>                
                        )}                                    

                        <ul className={`guest ${close ? 'show' : ''}`}>
                            {!close && guestItems.map((item) => (
                                <li key={item.textContent} className="nav-item current" onClick={openPage}>
                                    <NavLink to={item.path} className="nav-link">{item.textContent}</NavLink>
                                </li>                            
                            ))}
                        </ul>
                        
                    </nav>
                </Modal>
            </Suspense>
        </nav>
    );
}