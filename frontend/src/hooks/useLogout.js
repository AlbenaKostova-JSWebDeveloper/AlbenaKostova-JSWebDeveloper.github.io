import { useAdminContext } from './useAdminContext';

export const useLogout = () => {
    const { dispatch } = useAdminContext();
    
    const logout = () => {
        // remove token from storage
        localStorage.removeItem('admin');
        
        // dispatch logout action
        dispatch({type: 'LOGOUT'});
    }
    
    return { logout };
};