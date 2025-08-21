import api from "../api/axios";

export const isAuthenticated = async () => {
    try {
        const response = await api.get("/auth/check-auth");
        if(response.status === 200)
            return true;
        
    } catch (error) {
        console.error("Error checking authentication:", error);
        return false;
    }
};