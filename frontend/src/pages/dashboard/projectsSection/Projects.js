import React from 'react';

import Card from '../../../components/card/Card';
import './Projects.scss';

export default function Projects({ projects }) {
    return (
        <section className='projects grid'>
            <h3 className='section-title'>Work</h3>
      
            {projects.map((project) => <Card key={project._id} project={project} />)}
        </section>
    );
}