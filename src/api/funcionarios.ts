import apiClient from './api';

export const getFuncionarios = async () => {
  const response = await apiClient.get('/funcionarios'); 
  return response.data;
};