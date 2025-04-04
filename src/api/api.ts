import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8888', // Substitua pela URL base da sua API
  timeout: 10000, // Tempo limite para requisições
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;