import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ud-u86f.onrender.com/api',
  withCredentials: true
});


export default api;
