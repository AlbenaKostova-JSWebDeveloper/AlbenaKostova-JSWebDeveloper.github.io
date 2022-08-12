import { NavLink } from 'react-router-dom';


import './Brand.scss';


export default function Brand() {
    return (
        <NavLink to='/' className="brand">
            <p className='subtitle'>malykdim.dev</p>
            <h1 className='title text-primary'>JS Web Developer</h1>
        </NavLink>
    );
}