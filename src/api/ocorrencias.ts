import apiClient from './api';

export const getOcorrencias = async (queryParams: string) => {
  const response = await apiClient.get(`/ocorrencia?${queryParams}`); 
  return response.data;
};