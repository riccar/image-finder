import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 63ff086a0ebb7770e3d867bca4805c9fcef30315e95e45852157789218eb1cbd'
  }
});