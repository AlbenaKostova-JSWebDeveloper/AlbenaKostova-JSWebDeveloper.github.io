import { Link } from 'react-router-dom';

import './Card.scss';


export default function Card({ project }) {
  return (
    <article className='card'>
      <Link className="link" to={ project.link }>
        <header className="image-container">
            <img src={ project.image } alt="screenshot of the website" className="image" />
        </header>
        <h5 className="project-title">{ project.title }</h5>        
      </Link>
    </article>
  );
}