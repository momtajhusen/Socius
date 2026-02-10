import axios from 'axios';
const env = typeof process !== 'undefined' ? process.env || {} : {};
const baseURL = env.REACT_APP_SOCIUS_API_BASE || env.SOCIUS_API_BASE || 'http://127.0.0.1:8085';
const api = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } });
export { api, baseURL };
