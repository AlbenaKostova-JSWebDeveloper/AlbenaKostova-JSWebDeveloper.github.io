import React, { useState } from 'react';

import { useSignup } from '../../../hooks/useSignup';
import Button from '../../../components/button/Button';
import '../Auth.scss';

const Error = React.lazy(() => import('../../../components/error/Error.js'));

export default function Signup() {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const { signup, isLoading, error } = useSignup();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await signup(username, email, password);
    };
    
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <h3 className="section-title">Sign up</h3>
            
            <label className='label'>
                <span className='span'>username:</span> 
                <input type="text" id='username' className='input' onChange={(e) => setUsername(e.target.value)} placeholder="username" value={username} />
            </label>
            
            <label className='label'>
                <span className='span'>email:</span>
                <input type="email" id='email' className='input' onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" value={email} />
            </label>
            
            <label className='label'>
                <span className='span'>password:</span> 
                <input type="password" id='password' className='input' onChange={(e) => setPassword(e.target.value)} placeholder="password" value={password} />
            </label>
            
            {error && <Error>{error}</Error>}
            
            <Button className="submit" id="signup" disabled={isLoading}>Sign up</Button>
            
        </form>
    );
}