import apiClient from './api';

export const getAdvertencias = async () => {
  const response = await apiClient.get(`/advertencias`);
  return response.data;
};

export const createAdvertencias = async () => {
    const response = await apiClient.get(`/advertencias`);
    return response.data;
  };

export const getAdvertenciasByFuncionario = async (idFuncionario: string) => {
    const response = await apiClient.get(`/advertencias/${idFuncionario}`);
    return response.data;

};

    