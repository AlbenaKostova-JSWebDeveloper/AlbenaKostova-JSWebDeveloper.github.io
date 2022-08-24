import { Suspense } from 'react'

import './Social.scss';

export default function Social() {
    return (
        <section className='social-section'>
            <h3 className="section-title">Contact</h3>
            
            <article className="social ">
                <Suspense fallback={<div>Loading...</div>}>
                    <a 
                        href="https://github.com/malykdim/Portfolio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='icon-container'
                    >
                        <i className="icon fab fa-github fa-1x"></i>
                    </a>
                    
                    <div class="portrait-container">
                        <div class="portrait"></div>
                    </div>
                    
                    <a
                        href="https://www.linkedin.com/in/albenakostova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='icon-container'
                    >
                        <i className="icon fab fa-linkedin fa-1x"></i>
                    </a>                    
                </Suspense>
            </article>
        </section>
    );
}