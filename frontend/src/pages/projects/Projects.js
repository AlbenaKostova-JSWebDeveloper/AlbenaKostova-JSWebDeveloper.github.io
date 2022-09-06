import React, { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useProjectsContext } from '../../hooks/useProjectsContext';

import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import './Projects.scss';



export default function Projects() {
    const {projects, dispatch} = useProjectsContext();
    
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/projects', {headers: {'Content-Type': 'application/json', 'accept':'application/json'}});
            const json = await response.json();
            console.log(json);
            
            if (response.ok) {
                dispatch({ type: 'SET_PROJECTS', payload: json });
            }
        }
        
        fetchProjects();
    }, [dispatch]);
    
    return (
        <div className='projects-page'>
            <h3 className="section-title">Projects</h3>
            
            <section className="projects grid">
                <Suspense fallback={<Loading />}>
                    {projects && projects.map((project) => (
                        <Link to={`/projects/${project._id}`} key={project._id} project={project}>
                            <Card>
                                <article className='project-card'>
                                    <div className="link">
                                        <header className="image-container">
                                            <img src={ project.image } alt="screenshot of the website" className="image" />
                                        </header>
                                        <h5 className="project-title">{ project.title }</h5> 
                                        <p className="p description">{ project.description }</p>
                                        <p className="p technologies">
                                            <span className="tip">Technologies used: </span>
                                            { project.technologies.join(' | ') }
                                        </p>
                                    </div>
                                </article>
                            </Card>
                        </Link>
                    ))}
                </Suspense>              
            </section>
        </div>
    );
}