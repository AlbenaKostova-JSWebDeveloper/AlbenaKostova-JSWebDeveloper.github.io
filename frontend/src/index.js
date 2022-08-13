import React from 'react';
import ReactDOM from 'react-dom/client';

import { ProjectsContextProvider } from './context/ProjectsContext.js';

import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProjectsContextProvider>
            <App />      
        </ProjectsContextProvider>
    </React.StrictMode>
);

reportWebVitals();