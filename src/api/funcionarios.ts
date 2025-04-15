import apiClient from './api';

export const getFuncionarios = async () => {
  const response = await apiClient.get('/funcionarios'); 
  return response.data;
};


export const getFuncionario = async (id: string) => {
  const response = await apiClient.get(`/funcionarios/${id}`); 
  return response.data;
};

export const getFuncionarioCombo = async () => {
  const response = await apiClient.get('/funcionarios/combo'); 
  return response.data;
}
