import React, { useEffect, useState } from 'react';

// import { useProjectsContext } from '../../hooks/useProjectsContext.js';

import Projects from './projectsSection/Projects';
import Skills from './skillsSection/Skills';
import Docs from './docsSection/Docs';
import Social from './socialSection/Social';
import './Dashboard.scss';


export default function Dashboard() {
    const [projects, setProjects] = useState(null);
    // const {projects, dispatch} = useProjectsContext();

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch('/api/projects');
            const json = await res.json();
            console.log(json);
                
            if (res.ok) {
                setProjects(json)
                // dispatch({ type: 'SET_PROJECTS', payload: json });
            }
        };
        
        fetchProjects();
    }, []);
    
    return (
        <div className='container dashboard'>
            <Skills />
            
            {projects && <Projects projects={projects} />}
            
            <section className="docs">
                <Docs />
            </section>
            
            <section className="social">
                <Social />
            </section>
        </div>
    );
}