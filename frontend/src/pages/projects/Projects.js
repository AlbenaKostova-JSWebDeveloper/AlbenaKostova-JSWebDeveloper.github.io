import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useProjectsContext } from '../../hooks/useProjectsContext';

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
                {projects && projects.map((project) => (
                    <Card key={project._id} project={project}>
                        <article className='project-card'>
                            <Link className="link" to={ project.link }>
                                <header className="image-container">
                                    <img src={ project.image } alt="screenshot of the website" className="image" />
                                </header>
                                <h5 className="project-title">{ project.title }</h5>        
                            </Link>
                        </article>
                    </Card>
                ))}                
            </section>
        </div>
    );
}