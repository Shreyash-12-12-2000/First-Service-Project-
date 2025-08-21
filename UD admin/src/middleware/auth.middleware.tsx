import api from "../api/axios";

export const isAuthenticated = async () => {
  try {
    // No token from localStorage needed here
    const response = await api.get("/auth/check-auth");  // cookie sent automatically

    if (response.status === 200) return true;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};
