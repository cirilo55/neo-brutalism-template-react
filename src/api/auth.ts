import apiClient from './api';

export const getLogin = async (body: {email: string, password:string}) => {
  const response = await apiClient.post(`/login`, body);
  return response.data;
};