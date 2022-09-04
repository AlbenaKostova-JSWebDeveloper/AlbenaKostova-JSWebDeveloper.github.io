import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

import { useLogin } from '../../../hooks/useLogin';
import Button from '../../../components/button/Button';
import '../Auth.scss';

const Error = React.lazy(() => import('../../../components/error/Error.js'));

export default function Login() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const { login, isLoading, error } = useLogin();
    
    // const navigate = Navigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(username, password);
        
        // navigate('/');        
    };
    
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <h3 className="section-title">Log in</h3>
            
            <label className='label'>
                <span className='span'>username:</span> 
                <input type="text" id='username' className='input' onChange={(e) => setUsername(e.target.value)} placeholder="username" value={username} />
            </label>
            
            <label className='label'>
                <span className='span'>password:</span> 
                <input type="password" id='password' className='input' onChange={(e) => setPassword(e.target.value)} placeholder="password" value={password} />
            </label>
            
            {error && <Error>{error}</Error>}            
            
            <Button  className='btn submit' disabled={isLoading}>Log in</Button>            
        </form>
    );
}