import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ud-u86f.onrender.com/api',  // ✅ Use your deployed backend URL
  withCredentials: true
});


export default api;