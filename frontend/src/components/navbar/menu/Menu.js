import { NavLink } from 'react-router-dom';

import './Menu.scss';

export default function Menu() {
    return (
        <nav className="nav menu">
            <div className="menu-btn">
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            
            <ul className="menu-nav">
                <li className="nav-item current">
                    <NavLink to='/projects'>projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/documents'>documents</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact'>contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}