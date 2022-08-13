import React from 'react';

import Card from '../../../components/card/Card';
import './Projects.scss';

export default function Projects({ projects }) {
    return (
        <section className='projects grid'>
            <h2 className='h2'>Work</h2>
      
            {projects.map((project) => <Card key={project._id} project={project} />)}
        </section>
    );
}