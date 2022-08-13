import { createContext, useReducer } from 'react';

export const AdminContext = createContext();

export const adminReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { admin: action.payload };
        case 'LOGOUT':
            return { admin: null };
        default: 
            return state;
    }
};

export const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, {
        admin: null
    });
    
    console.log('AdminContext state: ', state);
    
    return (
        <AdminContext.Provider value={{...state, dispatch}}>
            { children }
        </AdminContext.Provider>
    );
};