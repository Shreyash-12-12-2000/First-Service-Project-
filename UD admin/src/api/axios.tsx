import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000/api',
   baseURL: 'https://ud-u86f.onrender.com/api', // ✅ Use your backend http 
   withCredentials: true
});

export default api;