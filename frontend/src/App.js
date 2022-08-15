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
const Docs = React.lazy(() => import('./pages/docs/Docs.js'));
const Contact = React.lazy(() => import('./pages/contact/Contact.js'));

function App() {
    const { admin } = useAdminContext();
    
    return (
        <div className="App">
            <BrowserRouter>
                <header className="App-header">
                    <Navbar />
                </header>
                <main className="App-main pages pt-3">
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path='/' element={<Dashboard />}/>
                            <Route path='/signup' element={admin ? <Navigate to='/' /> : <Signup />}/>
                            <Route path='/login' element={admin ? <Navigate to='/' /> : <Login />}/>
                            <Route path='/skills' element={<Skills />}/>
                            <Route path='/projects' element={<Projects />}/>
                            <Route path='/documents' element={<Docs />}/>
                            <Route path='/contact' element={<Contact />}/>
                        </Routes>
                    </Suspense>
                </main>
                <footer className="App-footer">
                    <Footer />
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;