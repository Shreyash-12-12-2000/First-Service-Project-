import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ud-u86f.onrender.com/api',  
});


console.log("🌐 Axios is using:", api.defaults.baseURL);



export default api;