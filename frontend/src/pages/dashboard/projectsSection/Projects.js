import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../../components/loading/Loading';
import Card from '../../../components/card/Card';
import './Projects.scss';

export default function Projects({ project }) {
    
    return (
        <section className='projects grid'>
            Projects
            
            <Suspense fallback={<Loading />}>
                {project ? 
                    <Card project={project}>
                        <Link className="link" to="/projects">
                            <header className="image-container">
                                <img src={ project.image } alt="screenshot of the website" className="image" />
                            </header>
                            <h5 className="project-title">{ project.title }</h5>        
                        </Link>
                    </Card> : ''
                }
            </Suspense>         
                
        </section>
    );
}