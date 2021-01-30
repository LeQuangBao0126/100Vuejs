import axios from 'axios';

export default function() {
  return axios.create({
        baseURL: 'http://localhost:3000/',
        responseType: 'json',
        withCredentials: false,
        headers: { 'X-Custom-Header': 'foobar' }
    });
};