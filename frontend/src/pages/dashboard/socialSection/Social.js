import { Suspense } from 'react'

import './Social.scss';

export default function Social() {
    return (
        <section className='social-section'>
            <h3 className="section-title">Contact</h3>
            
            <article className="social ">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='icon-container'>
                        <i className="icon fab fa-github fa-1x"></i>
                    </div>
                    
                    <div className="portrait-container">
                        <div className="portrait"></div>
                    </div>
                    
                    <div className='icon-container'>
                        <i className="icon fab fa-linkedin fa-1x"></i>
                    </div>                    
                </Suspense>
            </article>
        </section>
    );
}