import React, { Suspense, useEffect } from 'react';

import { useProjectsContext } from '../../hooks/useProjectsContext';

import SectionLink from '../../components/section-link/SectionLink';
import Projects from './projectsSection/Projects';
import Skills from './skillsSection/Skills';
import Docs from './docsSection/Docs';
import Social from './socialSection/Social';
import './Dashboard.scss';

export default function Dashboard() {
    const {projects, dispatch} = useProjectsContext();

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch('http://localhost:4000/api/projects/');
            const json = await res.json();
            
            if (json.projects) {}
                
            if (res.ok) {
                dispatch({ type: 'SET_PROJECTS', payload: json });
            }
        };
        
        fetchProjects();
    }, [dispatch]);
    
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <div className='container dashboard'>
                <SectionLink path='/skills'>
                    <Skills />
                </SectionLink>
                
                <SectionLink path='/projects'>
                    <Projects projects={projects} />
                </SectionLink>
                
                <SectionLink path='/documents'>
                    <Docs />
                </SectionLink>
                
                <SectionLink path='/contact'>
                    <Social />
                </SectionLink>   
            </div>
        </Suspense>
    );
}