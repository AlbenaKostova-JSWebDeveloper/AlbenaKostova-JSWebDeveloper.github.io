import React, { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAdminContext } from '../../hooks/useAdminContext';
import { useProjectsContext } from '../../hooks/useProjectsContext';

import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import './Projects.scss';

const Button = React.lazy(() => import('../../components/button/Button'));
const ProjectsForm = React.lazy(() => import('../../pages/admin/admin-panel/ProjectsForm'));


export default function Projects() {
    const {admin} = useAdminContext();
    const {projects, dispatch} = useProjectsContext();
    
    async function handleDelete (e) {
        console.log('delete btn clicked');
    }
    
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
                    <Card key={project._id} project={project}>
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
                                <p className="p repo">
                                    <span className="tip">View code: </span>
                                    <a href={ project.repo } target="_blank" rel="noopener noreferrer" className="url">{ project.title }</a>
                                </p>
                                <p className="p app">
                                    <span className="tip">Visit App: </span>
                                    <a href={ project.link } target="_blank" rel="noopener noreferrer" className="url">{ project.title }</a>
                                </p>    
                            </div>
                            {admin && (
                                <div className="admin-actions">
                                    <Button>
                                        <Link to="/projects-form" className="nav-link">
                                            Edit
                                            <ProjectsForm project={project} />
                                        </Link>
                                    </Button>
                                    <Button 
                                        className='logout nav-link' 
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            )}                                   
                        </article>
                    </Card>
                ))}
                </Suspense>              
            </section>
        </div>
    );
}