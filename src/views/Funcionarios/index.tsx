/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Table from '@/components/Table';
import useSWR from 'swr';
import { getFuncionarios } from '@/api/funcionarios';

interface Funcionario {
  [key: string]: string | number | boolean | null | { Descricao: string } | undefined;
  Nome: string;
  Cpf: string;
  Admissao?: string;
  Demissao?: string;
  Departamento?: { Descricao: string };
  Funcao?: { Descricao: string };
}

export default function Funcionarios() {
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]); // Estado para armazenar os dados filtrados

  const columns = [
    { key: 'Nome', label: 'Nome', sortable: true, width: '2fr' },
    { key: 'Admissao', label: 'Admissão', sortable: true, width: '1fr' },
    { key: 'Demissao', label: 'Demissão', sortable: true, width: '1fr' },
    { key: 'Departamento', label: 'Departamento', sortable: false, width: '2fr' },
    { key: 'Funcao', label: 'Função', sortable: false, width: '2fr' },
  ];

  // Carrega todos os dados de funcionários
  const { data, error, isLoading } = useSWR('/funcionarios', getFuncionarios);

  // Atualiza os dados filtrados sempre que `data` ou `showOnlyActive` mudar
  useEffect(() => {
    if (data) {
      const filtered = data
        .filter((funcionario: Funcionario) => {
          if (showOnlyActive) {
            return !funcionario.Demissao; 
          }
          return true; 
        })
        .map((funcionario: Funcionario) => ({
          Nome: funcionario.Nome,
          Cpf: funcionario.Cpf,
          Admissao: funcionario.Admissao ? new Date(funcionario.Admissao).toLocaleDateString() : '-',
          Demissao: funcionario.Demissao ? new Date(funcionario.Demissao).toLocaleDateString() : '-',
          Departamento: funcionario.Departamento?.Descricao || '-',
          Funcao: funcionario.Funcao?.Descricao || '-',
        }));

      setFilteredData(filtered); // Atualiza o estado com os dados filtrados
    }
  }, [data, showOnlyActive]); // Dependências: refaz o filtro quando `data` ou `showOnlyActive` mudar
  console.log(filteredData)
  return (
    <div className="p-2">
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={showOnlyActive}
            onChange={(e) => setShowOnlyActive(e.target.checked)} // Atualiza o estado
          />
          Mostrar apenas funcionários ativos
        </label>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>
          <p>Algo deu errado, favor entrar em contato com admin do sistema.</p>
          <p>{error.message}</p>
        </div>
      ) : filteredData.length === 0 ? (
        <div>Nenhum dado encontrado.</div>
      ) : (
        <Table columns={columns} data={filteredData} />
      )}
    </div>
  );
}