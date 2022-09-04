import { useContext } from "react";

import { AdminContext } from "../context/AdminContext.js";

export const useAdminContext = () => {
    const context = useContext(AdminContext);
    
    if (!context) {
        throw new Error('useAdminContext must be used inside a AdminContextProvider');
    }
    
    return context;
};