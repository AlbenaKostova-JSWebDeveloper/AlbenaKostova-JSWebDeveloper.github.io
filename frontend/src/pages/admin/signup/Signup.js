import { useState } from 'react';

import '../Auth.scss';


export default function Signup() {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(username, email, password);
    };
    
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            
            <label>
                Username: 
                <input type="text" id='username' onChange={(e) => setUsername(e.target.value)} value={username} />
            </label>
            
            <label>
                Email: 
                <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            
            <label>
                Password: 
                <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            
            <button className="auth" id="signup">Sign up</button>
            
        </form>
    );
}