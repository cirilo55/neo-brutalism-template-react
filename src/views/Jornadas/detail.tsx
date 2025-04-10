/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getFuncionario } from '@/api/funcionarios';
import YearlyCalendar from '@/components/Calendar';
// import Funcionarios from '.';
interface JornadaProps {
  onSetNome: (nome: string) => void;
}

export default function Jornada({ onSetNome }: JornadaProps) {
  const router = useRouter();
  const { slug } = router.query; 

  const { data, error, isLoading } = useSWR(
    slug ? `/funcionarios/${slug}` : null, 
    () => getFuncionario(slug as string)
  );

  const [funcionario, setFuncionario] = useState<any>(null);
  useEffect(() => {
    if (data) {
      if (data.Nome) {
        onSetNome(data.Nome);
      }
      // Transforma diasNaoTrabalhados em array, caso seja uma string
      const jornadas = data.jornadas?.map((jornada: any) => ({
        ...jornada,
        diasNaoTrabalhados: typeof jornada.diasNaoTrabalhados === "string"
          ? JSON.parse(jornada.diasNaoTrabalhados)
          : jornada.diasNaoTrabalhados,
      }));

      setFuncionario({ ...data, jornadas });
    }
  }, [data, onSetNome]);

  if (!slug) return null; 

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados do funcionário. Por favor, tente novamente mais tarde.</p>;
  }

  if (!funcionario) {
    return <p>Nenhum dado encontrado para o funcionário.</p>;
  } 

  return (
    <>
      <>
        <section>
          <YearlyCalendar
            markedDates={funcionario.jornadas?.[0]?.diasNaoTrabalhados || []}
            idIntegracao={funcionario.Id}
            entrada1={funcionario.jornadas?.[0]?.entrada1}
            entrada2={funcionario.jornadas?.[0]?.saida2}
          />
        </section>
      </>
    </>
  );
}