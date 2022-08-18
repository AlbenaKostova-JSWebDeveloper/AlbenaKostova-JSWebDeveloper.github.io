import { Link } from 'react-router-dom';

import './SectionLink.scss';

export default function SectionLink({path, children}) {
    return (
        <Link to={path} className='section-link'>
            <div className="content">
                {children}
            </div>
        </Link>
    );
}