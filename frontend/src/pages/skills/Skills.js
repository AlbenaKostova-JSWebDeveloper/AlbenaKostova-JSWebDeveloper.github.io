import { Suspense } from "react";

import Card from '../../components/card/Card';
import './Skills.scss';

export default function Skills() {
    return (
        <section className="skills-page">
            <h3 className="section-title">Technical skills</h3>
            
            <section className="skills grid">
                <Suspense fallback={<div>Loading...</div>}>
                    <Card>
                        <p className="icons">
                            <span className="span">Main Technology: </span>
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/>                     
                        </p>
                    </Card>
                    <Card>
                        <p className="icons">
                            <span className="span">Front-End &amp; Frameworks:</span>
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="30" height="30" /> 
                            &nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="30" height="30"/> 
                            &nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="30" height="30"/> 
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/> 

                        </p>
                    </Card>
                    <Card>
                        <p className="icons">
                            <span className="span">Baas / Services: </span>
                            &nbsp;&nbsp;
                            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="30" height="30"/> 
                            &nbsp;&nbsp;
                            <img src="https://opencollective-production.s3-us-west-1.amazonaws.com/ff3687f0-d07e-11e7-a850-7b3f8e88e105.png" alt="back4app" width="95" height="24"/> 
                        </p>
                    </Card>
                    <Card>
                        <p className="icons">
                            <span className="span">Back-End / Server: </span>
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="30" height="30"/> 
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="30" height="30"/> 
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original-wordmark.svg" alt="express" width="30" height="30"/> 
                            &nbsp;&nbsp;
                        </p>
                    </Card>
                    <Card>
                        <p className="icons">
                            <span className="span">Database: </span>
                            &nbsp;&nbsp;
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="30" height="30"/>
                            &nbsp;&nbsp;
                            <img src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" alt="mongodb" width="45" height="20"/>
                        </p>
                    </Card>
                    <Card>
                        <p className="icons">
                            <span className="span">Global: </span>
                            &nbsp;&nbsp;
                            <img src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667" title="Postman" alt="Postman" width="30" height="30" data-canonical-src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"/>
                            &nbsp;&nbsp;
                            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="30" height="30"/>
                        </p>
                    </Card>

                </Suspense>
            </section>
        </section>
    );
}
