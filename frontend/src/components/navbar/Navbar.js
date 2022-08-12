import Brand from './brand/Brand';
import Menu from './menu/Menu';
import './Navbar.scss';

export default function Navbar() {
    return (    
        <div className='navigation'>
            <Brand />   
            <Menu />
        </div>
    );
}