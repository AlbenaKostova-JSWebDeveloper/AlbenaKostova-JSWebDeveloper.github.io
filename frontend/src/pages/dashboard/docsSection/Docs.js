import { Suspense } from "react";

import './Docs.scss';

export default function Docs() {
    return (
        <section className="documents-section">
            <h3 className="section-title">Documents</h3>
            
            <article className="documents">
                <Suspense fallback={<div>Loading...</div>}>
                <div className="icon-container">
                    <i className="icon fa-solid fa-award fa-1x" />                    
                </div>
                <div className="icon-container">
                    <i class="icon fa-solid fa-user fa-1x"></i>
                </div>
                <div className="icon-container">
                    <i className="icon fa-solid fa-file-arrow-down fa-1x" />
                </div>
                </Suspense>                
            </article>
        </section>
    );
}