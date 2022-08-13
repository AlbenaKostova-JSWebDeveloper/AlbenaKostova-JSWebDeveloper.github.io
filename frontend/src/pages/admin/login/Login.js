import { useState } from 'react';

import '../Auth.scss';


export default function Login() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(username, password);
    };
    
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            
            <label>
                Username: 
                <input type="text" id='username' onChange={(e) => setUsername(e.target.value)} value={username} />
            </label>
            
            <label>
                Password: 
                <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            
            <button className="auth" id="login">Log in</button>
            
        </form>
    );
}