import { Suspense } from 'react';

import Resume from '../../assets/documents/Resume.pdf';
import React from '../../assets/documents/ReactJS.pdf';
import Applications from '../../assets/documents/JSApplications.pdf';
import Advanced from '../../assets/documents/JSAdvanced.pdf';
import Recommendation from '../../assets/documents/Zeugnis.pdf';
import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import './Docs.scss';

export default function Docs() {
    const docs = [
        {
            _id: 1,
            pdf: React,
            jpeg: '/assets/images/react.jpeg'
        },
        {
            _id: 2,
            pdf: Applications,
            jpeg: '/assets/images/applications.jpeg'
        },
        {
            _id: 3,
            pdf: Advanced,
            jpeg: '/assets/images/advanced.jpeg'
        },
        {
            _id: 4,
            pdf: Resume,
            jpeg: '/assets/images/resume.jpeg'
        },
        {
            _id: 5,
            pdf: Recommendation,
            jpeg: '/assets/images/recommendation.jpeg'
        }
    ];
    
    return (
        <div className='docs-page'>
            <h3 className="section-title">Documents</h3>
            
            <section className="docs grid">
                <Suspense fallback={<Loading />}>
                    {docs && docs.map((doc) => (
                        <Card key={doc._id} doc={doc}>
                            <article className="doc-card">
                                <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="link pdf">
                                    <div className="image-container">                        
                                            <img src={doc.jpeg} alt="document" className='image' />
                                    </div>
                                </a>                                
                            </article>
                        </Card>                        
                    ))}
                </Suspense>
            </section>            
        </div>
    );
}