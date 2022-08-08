
import Projects from './projectsSection/Projects';
import Skills from './skillsSection/Skills';
import Docs from './docsSection/Docs';
import Social from './socialSection/Social';
import './Dashboard.scss';


export default function Dashboard() {
    const projects = [
        {"0":"first"},
        {"1":"second"},
        {"2":"third"}
    ]
    
    return (
        <div className='container dashboard'>
            {projects && <Projects projects={projects} />}
            
            <section className="skills">
                <Skills />
            </section>
            
            <section className="docs">
                <Docs />
            </section>
            
            <section className="social">
                <Social />
            </section>
        </div>
    );
}