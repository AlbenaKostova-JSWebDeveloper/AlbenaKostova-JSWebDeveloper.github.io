import React, { Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAdminContext } from './hooks/useAdminContext';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import './App.scss';

const Loading = React.lazy(() => import('./components/loading/Loading.js'));
const Signup = React.lazy(() => import('./pages/admin/signup/Signup.js'));
const Login = React.lazy(() => import('./pages/admin/login/Login.js'));
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard.js'));
const Skills = React.lazy(() => import('./pages/skills/Skills.js'));
const Projects = React.lazy(() => import('./pages/projects/Projects.js'));
const Details = React.lazy(() => import('./pages/details/Details.js'));
const Docs = React.lazy(() => import('./pages/docs/Docs.js'));
const Contact = React.lazy(() => import('./pages/contact/Contact.js'));
const AdminPanel = React.lazy(() => import('./pages/admin/admin-panel/AdminPanel.js'));
const SkillsForm = React.lazy(() => import('./pages/admin/admin-panel/SkillsForm.js'));
const ProjectsForm = React.lazy(() => import('./pages/admin/admin-panel/ProjectsForm.js'));
const DocsForm = React.lazy(() => import('./pages/admin/admin-panel/DocsForm.js'));

function App() {
    const { admin } = useAdminContext();
    
    const IsAdmin = ({ children }) => admin ? children : <Navigate to="/" />;
    const IsGuest = ({ children }) => !admin ? children : <Navigate to="/" />;
    
    return (
        <div className="App">
            <BrowserRouter>
                <header className="header">
                    <Navbar />
                </header>
                <main className="main pages pt-3">
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path='/' element={<Dashboard />}/>
                            <Route path='/skills' element={<Skills />}/>
                            <Route path='/projects' element={<Projects />}/>
                            <Route path='/projects/:id' element={<Details/>}/>
                            <Route path='/documents' element={<Docs />}/>
                            <Route path='/contact' element={<Contact />}/>
                            
                            <Route path='/signup' element={<IsGuest children={<Signup />} />}/>
                            <Route path='/login' element={<IsGuest children={<Login />} />}/>
                            
                            <Route path='/admin' element={<IsAdmin children={<AdminPanel/>} />}/>
                            <Route path='/skills-form' element={<IsAdmin children={<SkillsForm/>} />}/>
                            <Route path='/projects-form' element={<IsAdmin children={<ProjectsForm/>} />}/>
                            <Route path='/projects-form/:id' element={<IsAdmin children={<ProjectsForm/>} />}/>                            
                            <Route path='/documents-form' element={<IsAdmin children={<DocsForm/>} />}/>
                        </Routes>
                    </Suspense>
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;