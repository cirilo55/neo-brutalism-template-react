import apiClient from './api';

export const getJornadas = async () => {
  const response = await apiClient.get('/jornadas'); 
  return response.data;
};

interface JornadaBody {
  diasNaoTrabalhados: string[];
}

export const updateJornada = async (id: string, body: JornadaBody) => {
  const response = await apiClient.put(`/jornadas/${id}`, body); 
  return response.data;
};