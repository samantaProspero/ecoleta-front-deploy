import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecoleta-samanta.herokuapp.com/'
});

export default api;