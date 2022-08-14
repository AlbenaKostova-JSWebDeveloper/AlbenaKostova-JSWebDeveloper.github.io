import { Suspense } from "react";

import './Skills.scss';

export default function Skills() {
    return (
        <section className="skills">
            <h3 className="section-title">Technical skills</h3>
            <Suspense fallback={<div>Loading...</div>}>
                <p className="icons">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="30" height="30"/> 
                    &nbsp;&nbsp;
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/> 
                    &nbsp;
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/> 
                    &nbsp;
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="30" height="30"/> 
                    &nbsp;&nbsp;
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="30" height="30"/> 
                    &nbsp;&nbsp;
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="30" height="30"/> 
                    &nbsp;&nbsp;
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="30" height="30"/>     
                </p>
            </Suspense>
        </section>
    );
}
