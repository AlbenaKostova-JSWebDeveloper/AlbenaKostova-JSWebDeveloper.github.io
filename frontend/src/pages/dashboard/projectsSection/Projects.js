import React, { Suspense } from 'react';
// import { Link } from 'react-router-dom';

import Loading from '../../../components/loading/Loading';
import './Projects.scss';

export default function Projects({projects}) {
    return (
        <section className='projects-section'>
                <h3 className="section-title">Projects</h3>
                
                <article className='projects'>
                    <Suspense fallback={<Loading />}>
                        <div className="image-container">
                            <img src="/assets/images/team-hub.jpeg" alt="screenshot of the website" className="image" />
                        </div>
                        <div className="image-container">
                            <img src="/assets/images/the-stone-magic.jpeg" alt="screenshot of the website" className="image" />
                        </div>
                        <div className="image-container">
                            <img src="/assets/images/projects-bg.jpg" alt="screenshot of the website" className="image" /> 
                        </div>
                    </Suspense>                         
                </article>                
        </section>
    );
}