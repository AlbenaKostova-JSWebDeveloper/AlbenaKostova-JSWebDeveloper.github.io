import React from 'react';
import ReactDOM from 'react-dom/client';

import { AdminContextProvider } from './context/AdminContext.js';
import { ProjectsContextProvider } from './context/ProjectsContext.js';

import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AdminContextProvider>
            <ProjectsContextProvider>
                <App />      
            </ProjectsContextProvider>            
        </AdminContextProvider>
    </React.StrictMode>
);

reportWebVitals();