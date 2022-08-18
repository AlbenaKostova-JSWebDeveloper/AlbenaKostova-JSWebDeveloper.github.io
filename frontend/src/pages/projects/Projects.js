import React from 'react';

import Card from '../../components/card/Card';
import './Projects.scss';

export default function Projects({projects}) {
    return (
        <section className='projects grid'>
            Projects
      
            {projects && projects.map((item) => <Card key={item._id} item={item} />)}
        </section>
    );
}
