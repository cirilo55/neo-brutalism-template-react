/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TabContent } from './styles';
import useSWR from 'swr';
import { getFuncionario } from '@/api/funcionarios';

export default function Jornada() {
  const router = useRouter();
  const { slug } = router.query; 

  const { data, error, isLoading } = useSWR(
    slug ? `/funcionarios/${slug}` : null, 
    () => getFuncionario(slug as string)
  );

  const [funcionario, setFuncionario] = useState<any>(null);

  useEffect(() => {
    if (data) {
      const jornadas = data.jornadas?.map((jornada: any) => ({
        ...jornada,
        diasNaoTrabalhados: typeof jornada.diasNaoTrabalhados === "string"
          ? JSON.parse(jornada.diasNaoTrabalhados)
          : jornada.diasNaoTrabalhados,
      }));

      setFuncionario({ ...data, jornadas });
    }
  }, [data]);

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
  console.log(funcionario.jornadas?.[0]?.diasNaoTrabalhados)
  console.log('type', typeof funcionario.jornadas?.[0]?.diasNaoTrabalhados)
  return (
    <>
      <TabContent>
        {/* <section>
          <YearlyCalendar
            markedDates={funcionario.jornadas?.[0]?.diasNaoTrabalhados || []}
          />
        </section> */}
      </TabContent>
    </>
  );
}