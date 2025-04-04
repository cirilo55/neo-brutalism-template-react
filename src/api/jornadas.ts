import apiClient from './api';

export const getJornadas = async () => {
  const response = await apiClient.get('/jornadas'); 
  return response.data;
};