import { Suspense } from 'react';

import './Contact.scss';

export default function Contact() {
    async function handleEmailClick (e) {
        const a = 'albena.kostov'
        const b = '@'
        const c = 'gmail.com'
        const email = a + b + c;
        
        if (!navigator.clipboard) {
            alert("Copy functionality not supported");
        }
        
        try {
            await navigator.clipboard.writeText(email);
            alert(`${email} copied`);
            
        } catch (err) {
            alert(`${e.target.value} - 21`);
            
            console.error("ERROR", err);
        }
    }
    return (
        <div className='contact-page'>
            <h3 className="section-title">Contact</h3>
            
            <article className="contact grid">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="portrait-container">
                        <div className="portrait"></div>
                    </div>
                    
                    <div className="languages">
                        <div className="range-container">                            
                            <span className="lang" id="bg">Bulgarian</span>
                            <label className="range-value">
                                <input type="range" id="range" min="0" max="100"  defaultValue={100} className="range"/>
                            </label>
                        </div>
                        <div className="range-container">                            
                            <span className="lang" id="en">English</span>
                            <label className="range-value">
                                <input type="range" id="range" min="0" max="100" defaultValue={85} className="range"/>                                
                            </label>
                        </div>
                        <div className="range-container">                            
                            <span className="lang" id="de">German</span>                            
                            <label className="range-value">
                                <input type="range" id="range" min="0" max="100" defaultValue={70} className="range"/>
                            </label>
                        </div>
                        {/* <div className="range-container">                            
                            <span className="lang" id="bg">Russian</span>
                            <label className="range-value">
                                <input type="range" id="range" min="0" max="100" defaultValue={37} className="range"/>
                            </label>
                        </div> */}
                    </div>
                    
                    <div 
                        onClick={handleEmailClick} 
                        className='email icon-container'
                        >
                        <i className="icon fa-solid fa-at fa-2x"></i>
                    </div>
                    
                    <div className="social-links">
                        <a 
                            href="https://github.com/malykdim" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='gh icon-container'
                        >
                            <i className="icon fab fa-github fa-2x"></i>
                        </a>                        
                        
                        <a
                            href="https://www.linkedin.com/in/albenakostova"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='li icon-container'
                        >
                            <i className="icon fab fa-linkedin fa-2x"></i>
                        </a>                  
                    </div>
                </Suspense>                
            </article>            
        </div>
    );
}