import React from 'react';
import Table from '@/components/Table';
import {getJornadas} from '@/api/jornadas';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function Funcionarios() {
  const columns = [
    { key: 'funcionarioNome', label: 'Funcionário', sortable: true, width: '2.5fr' },
    { key: 'diasDaSemana', label: 'Dias da Semana', sortable: false, width: '2.5fr' },
    { key: 'entrada1', label: 'Entrada 1', sortable: false, width: '.75fr' },
    { key: 'saida1', label: 'Saída 1', sortable: false, width: '.75fr' },
    { key: 'entrada2', label: 'Entrada 2', sortable: false, width: '.75fr' },
    { key: 'saida2', label: 'Saída 2', sortable: false, width: '.75fr' },
  ];
  const { data, error, isLoading } = useSWR('/jornadas', getJornadas);
  const router = useRouter();

  const handleEdit = (id: string) => {
    router.push(`/jornadas/${id}`); // Redireciona para a página de edição
  };


  return (
    <div className="p-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          <p>Algo deu errado, favor entrar em contato com admin do sistema.</p>
          <p>{error.message}</p>
        </div>
      ) : data.length === 0 ? (
        <div>Nenhum dado encontrado.</div>
      ) : (
        <Table columns={columns} data={data} onRowClick={handleEdit}/>
      )}

    </div>
  );
}