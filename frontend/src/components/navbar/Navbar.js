import { NavLink } from 'react-router-dom';
import Menu from './menu/Menu';
import './Navbar.scss';

export default function Navbar() {
    return (    
        <div className='container navigation'>
            <NavLink to='/' className='brand'>
                <p className='subtitle'>malykdim.dev</p>
                <h1 className='title'>JS Web Developer</h1>
            </NavLink>
            
            <Menu />
        </div>
    )
}