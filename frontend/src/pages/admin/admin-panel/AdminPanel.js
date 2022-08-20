import React, { Suspense } from 'react';

// import { useAdminContext } from '../../../hooks/useAdminContext';
// import { useLogout } from '../../../hooks/useLogout';

import SectionLink from '../../../components/section-link/SectionLink';
// import Button from '../../../components/button/Button';
import './AdminPanel.scss';

const Loading = React.lazy(() => import('../../../components/loading/Loading.js'));
// const SkillsForm = React.lazy(() => import('./SkillsForm.js'));
// const ProjectsForm = React.lazy(() => import('./ProjectsForm.js'));
// const DocsForm = React.lazy(() => import('./DocsForm.js'));


export default function AdminPanel() {
    // const { logout } = useLogout();
    // // const { admin } = useAdminContext();
    
    // function handleLogout () {
    //     logout();
    // }

    return (
        <Suspense fallback={<Loading />}>
            {/* {admin && ( */}
                <section className='container admin-panel'>
                        <SectionLink path='/skills-form'>
                            <h3 className="section-title">Skills Form</h3>
                        </SectionLink>
                        
                        <SectionLink path='/projects-form'>
                            <h3 className="section-title">Projects Form</h3>
                        </SectionLink>
                        
                        <SectionLink path='/documents-form'>
                            <h3 className="section-title">Docs Form</h3>
                        </SectionLink>
                        
                        {/* <SectionLink>
                            <span className="name">{admin.username}</span> &nbsp;
                            <Button  id="logout" className='logout nav-link' onClick={handleLogout}>Log out</Button>
                        </SectionLink> */}
                </section>
                
            {/* )} */}
        </Suspense>
    );
}