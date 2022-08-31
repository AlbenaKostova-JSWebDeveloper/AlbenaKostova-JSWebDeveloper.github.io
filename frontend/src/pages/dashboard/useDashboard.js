import { useCallback } from "react";

export function useDashboard() {
    
    const fetchProjects = useCallback(async () => {
        const res = await fetch('http://localhost:4000/api/projects/');
        const json = await res.json();
        return json;
    }, []);
    
    return {
        fetchProjects
    };
}