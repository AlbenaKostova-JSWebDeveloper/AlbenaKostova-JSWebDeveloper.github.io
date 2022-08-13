import { useState } from 'react';

import { useAdminContext } from './useAdminContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAdminContext();
    
    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });        
        const json = await response.json();
        
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);            
        }
        if (response.ok) {
            // save the token to local storage
            localStorage.setItem('admin', JSON.stringify(json));
            
            // update the admin context
            dispatch({type: 'LOGIN', payload: json});
            
            setIsLoading(false);
        }
    };
    
    return { login, isLoading, error };
};