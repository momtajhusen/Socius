import axios from 'axios';
const baseURL = (typeof process !== 'undefined' && process.env && process.env.SOCIUS_API_BASE) ? process.env.SOCIUS_API_BASE : 'http://127.0.0.1:8085';
const api = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } });
export { api, baseURL };
