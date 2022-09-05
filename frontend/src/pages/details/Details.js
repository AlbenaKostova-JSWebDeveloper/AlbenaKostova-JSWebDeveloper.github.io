import React, { Suspense } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useAdminContext } from '../../hooks/useAdminContext';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import './Details.scss';

const Button = React.lazy(() => import('../../components/button/Button'));


export default function Details() {
    const {admin} = useAdminContext();
    const { id } = useParams();
    const { data, isPending, error } = useFetch(`/api/projects/${id}`); 

    async function handleDelete (e) {
        console.log('delete btn clicked');
    }
    
    return (
        <div className='details-page'>
            <h3 className="section-title">Details - {data && data.title}</h3>
            
            <section className="projects">
                <Suspense fallback={<Loading />}>
                    {isPending && <Loading />}
                    {data && (
                        <Card project={data}>
                            <article className='project-card'>
                                <div className="link">
                                    <header className="image-container">
                                        <img src={ data.image } alt="screenshot of the website" className="image" />
                                    </header>
                                    <h5 className="project-title">{ data.title }</h5> 
                                    <p className="p description">{ data.description }</p>
                                    <p className="p technologies">
                                        <span className="tip">Technologies used: </span>
                                        { data.technologies.join(' | ') }
                                    </p>
                                    <div className="cta">
                                        <Button className="p details">                                    
                                            <a href={ data.details } target="_blank" rel="noopener noreferrer" className="nav-link">
                                                <span>Details</span>
                                            </a>
                                        </Button>
                                        <Button className="p repo">                                    
                                            <a href={ data.repo } target="_blank" rel="noopener noreferrer" className="nav-link">
                                                <span>View code</span>
                                            </a>
                                        </Button>
                                        <Button className="p app">                                    
                                            <a href={ data.link } target="_blank" rel="noopener noreferrer" className="nav-link">
                                                <span>Visit app</span>
                                            </a>
                                        </Button>  
                                    </div>
                                </div>
                                {admin && (
                                    <div className="admin-actions">
                                        <Button>
                                            <Link 
                                                to={`/projects-form/${data._id}`} 
                                                className='nav-link'
                                            >
                                                Edit                                            
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
                    )}
                    {error && <p>{error}</p>}
                </Suspense>
            </section>
        </div>
    );
}