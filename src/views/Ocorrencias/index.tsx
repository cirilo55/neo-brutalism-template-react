import React, { useState } from 'react';
import useSWR from 'swr';
import Table from '@/components/Table';
import { getOcorrencias } from '@/api/ocorrencias';
import { FilterWrapper, FilterInput } from './styles';

export default function Batidas() {

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedYesterday = yesterday.toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(formattedYesterday); // Data inicial como hoje

  const columns = [
    { key: 'tipo', label: 'Tipo', sortable: true, width: '.5fr' },
    { key: 'funcionarioNome', label: 'Funcionário', sortable: true, width: '2.5fr' },
    { key: 'horarioEsperado', label: 'Horario esperado', sortable: false, width: '1.5fr'  },
    { key: 'horarioBatido', label: 'Horario Batido', sortable: false , width: '1fr'},
    { key: 'atrasoMinutos', label: 'Atraso', sortable: false , width: '.5fr'},
  ];

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (startDate) params.append('dataInicio', startDate);
    if (startDate) params.append('dataFim', startDate);
    return params.toString();
  };

  const queryParams = buildQueryParams();

  const { data, error, isLoading } = useSWR(queryParams, getOcorrencias);

  return (
    <div className="p-2">
      <FilterWrapper>
        <FilterInput
          type="date"
          value={startDate}
          placeholder="Data Inicial"
          max={formattedYesterday} 
          onChange={(e) => setStartDate(e.target.value)}

        />
      </FilterWrapper>
      
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          <p>Algo deu errado, favor entrar em contato com admin do sistema.</p>
          <p>{error.message}</p>
        </div>
      ) : data.length === 0 ? (
        <div>Nenhum dado encontrado para a data: {startDate.split('-').reverse().join('/')}</div>
      ) : (
        <Table columns={columns} data={data} />
      )}
      </div>
  );
}