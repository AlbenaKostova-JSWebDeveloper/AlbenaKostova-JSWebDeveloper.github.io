
import './Card.scss';

export default function Card({children}) {
    return (
        <article className='card'>
            { children }
        </article>
    );
}