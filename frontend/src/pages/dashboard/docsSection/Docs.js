import { Suspense } from "react";

import './Docs.scss';

export default function Docs() {
    return (
        <section className="docs">
            <h3 className="section-title">Documents</h3>
            
            <Suspense fallback={<div>Loading...</div>}>

            </Suspense>

        </section>
    );
}