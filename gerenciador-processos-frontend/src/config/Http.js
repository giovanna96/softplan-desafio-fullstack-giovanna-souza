import Axios from 'axios';
export const Http = Axios.create({ baseURL: 'http://localhost:8080' });
