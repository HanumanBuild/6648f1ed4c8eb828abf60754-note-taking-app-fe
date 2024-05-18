import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NOTE_TAKING_APP_BE_URL,
});

export default api;