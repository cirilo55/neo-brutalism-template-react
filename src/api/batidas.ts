import apiClient from './api';

export const getBatidas = async () => {
  const response = await apiClient.get('/batidas'); 
  return response.data;
};