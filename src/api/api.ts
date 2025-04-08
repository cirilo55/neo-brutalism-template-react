import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8888', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // Obtém o token dos cookies
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('authToken='))
      ?.split('=')[1];

    // Adiciona o token no cabeçalho Authorization, se existir
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Lida com erros antes de enviar a requisição
    return Promise.reject(error);
  }
);

export default apiClient;