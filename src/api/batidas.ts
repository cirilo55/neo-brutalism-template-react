import apiClient from './api';

export const getBatidas = async (queryParams: string) => {
  const response = await apiClient.get(`/batidas?${queryParams}`);
  return response.data;
};