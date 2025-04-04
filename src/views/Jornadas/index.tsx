import React from 'react';
import { getJornadas } from '@/api/jornadas';
import useSWR from 'swr';
import Table from '@/components/Table';
// import { FilterWrapper, FilterInput } from './styles';

export default function Jornadas() {
    const { data, error, isLoading } = useSWR('/', getJornadas);
    console.log('data', data);

    if (isLoading) return <div>Loading...</div>;
    if (error) return (
        <div>
            <p>Algo deu errado, favor entrar em contato com admin do sistema.</p>
            <p>{error.message}</p>
        </div>
    );


    const columns = [
        { key: 'funcionarioNome', label: 'Funcionário', sortable: true, width: '3fr' },
        { key: 'diasDaSemana', label: 'Dias', sortable: false , width: '3fr'},
        { key: 'entrada1', label: 'Entrada 1', sortable: false, width: '1fr' },
        { key: 'saida1', label: 'Saída 1', sortable: false , width: '1fr'},
        { key: 'entrada2', label: 'Entrada 2', sortable: false , width: '1fr'},
        { key: 'saida2', label: 'Saída 2', sortable: false , width: '1fr'},

      ];

    return (
        <div className="p-2">
            <Table columns={columns} data={data} />
        </div>
  );
};