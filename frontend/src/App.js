import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import './App.scss';

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard.js'));
const Projects = React.lazy(() => import('./pages/projects/Projects.js'));
const Docs = React.lazy(() => import('./pages/docs/Docs.js'));
const Contact = React.lazy(() => import('./pages/contact/Contact.js'));



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className="App-header">
                    <Navbar />
                </header>
                <main className="App-main pages">
                    <Routes>
                        <Route path='/' element={<Dashboard />}/>
                        <Route path='/projects' element={<Projects />}/>
                        <Route path='/documents' element={<Docs />}/>
                        <Route path='/contact' element={<Contact />}/>
                    </Routes>
                </main>
                <footer className="App-footer">
                    <Footer />
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
