import React, { useState } from 'react';
import useSWR from 'swr';
import Table from '@/components/Table';
import { getBatidas } from '@/api/batidas';
import { FilterWrapper, FilterInput } from './styles';

export default function Batidas() {
  // Obter a data de hoje no formato YYYY-MM-DD
  // const yesterday = new Date().toISOString().split('T')[0]; // Removed unused variable
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString().split('T')[0];
  // Estados para os filtros
  const [startDate] = useState(formattedYesterday); // Data inicial como hoje

  const columns = [
    { key: 'FuncionarioId', label: 'id', sortable: true, width: '.5fr' },
    { key: 'FuncionarioNome', label: 'Funcionário', sortable: true, width: '4fr' },
    { key: 'FonteDadosEntrada1Horas', label: 'Entrada 1', sortable: false, width: '1fr'  },
    { key: 'FonteDadosSaida1Horas', label: 'Saída 1', sortable: false , width: '1fr'},
    { key: 'FonteDadosEntrada2Horas', label: 'Entrada 2', sortable: false , width: '1fr'},
    { key: 'FonteDadosSaida2Horas', label: 'Saída 2', sortable: false , width: '1fr'},
  ];

  // Use SWR para buscar os dados
  const { data, error, isLoading } = useSWR('/batidas', getBatidas);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <p>Algo deu errado, favor entrar em contato com admin do sistema.</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="p-2">
      <FilterWrapper>
        <FilterInput
          type="date"
          value={startDate}
        //   onChange={(e) => setStartDate(e.target.value)}
          placeholder="Data Inicial"
        />
      </FilterWrapper>
      <Table columns={columns} data={data} />
    </div>
  );
}