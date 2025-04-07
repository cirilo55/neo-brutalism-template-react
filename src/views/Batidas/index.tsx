import React, { useState } from 'react';
import useSWR from 'swr';
import Table from '@/components/Table';
import { getBatidas } from '@/api/batidas';
import { FilterWrapper, FilterInput } from './styles';

export default function Batidas() {
  const today = new Date().toISOString().split('T')[0];

  const [startDate, setStartDate] = useState(today);

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (startDate) params.append('dataInicio', startDate);
    if (startDate) params.append('dataFim', startDate);
    return params.toString();
  };

  const columns = [
    { key: 'FuncionarioNome', label: 'Funcionário', sortable: true, width: '4fr' },
    { key: 'FonteDadosEntrada1Horas', label: 'Entrada 1', sortable: false, width: '1fr' },
    { key: 'FonteDadosSaida1Horas', label: 'Saída 1', sortable: false , width: '1fr'},
    { key: 'FonteDadosEntrada2Horas', label: 'Entrada 2', sortable: false , width: '1fr'},
    { key: 'FonteDadosSaida2Horas', label: 'Saída 2', sortable: false , width: '1fr'},
  ];
  const queryParams = buildQueryParams();
  const { data, error, isLoading } = useSWR(queryParams, getBatidas);

  return (
    <div className="p-2">
      <FilterWrapper>
          <FilterInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            max={today} // Define o limite máximo como a data de hoje
            placeholder="Data Inicial"
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