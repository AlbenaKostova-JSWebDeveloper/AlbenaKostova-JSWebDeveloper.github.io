import React, { useEffect } from 'react';

import { useProjectsContext } from '../../hooks/useProjectsContext';

import SectionLink from '../../components/section-link/SectionLink';
import Projects from './projectsSection/Projects';
import Skills from './skillsSection/Skills';
import Docs from './docsSection/Docs';
import Social from './socialSection/Social';
import './Dashboard.scss';
import { useDashboard } from './useDashboard';

export default function Dashboard() {
    const {projects, dispatch} = useProjectsContext();
    const { fetchProjects } = useDashboard();

    useEffect(() => {
        const getPojects = async () => {
            const projects = await fetchProjects();
            if (!projects) return;
            dispatch({ type: 'SET_PROJECTS', payload: projects });            
        };
        getPojects();
    }, [dispatch, fetchProjects]);
    
    return (
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
    );
}