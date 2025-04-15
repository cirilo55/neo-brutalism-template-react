import React, { useState, useEffect } from 'react';
import { Container, ProfileCard, InfoGroup, InfoRow, Tabs, TabButton, TabContent, OutlinedButton } from './styles';
import { Funcionario } from '@/interfaces/funcionarios';
import { getFuncionario } from '@/api/funcionarios';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Button from '@/components/Button';


export default function FuncionarioDetails({ onSetNome }: { onSetNome: (nome: string) => void }) {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR<Funcionario>(
    slug ? `/funcionarios/${slug}` : null,
    () => getFuncionario(slug as string)
  );

  const handleNewAdvertencia = () => {
    router.push(`/advertencia/add/${slug}`);
  }

  const [activeTab, setActiveTab] = useState<'info' | 'ocorrencias' | 'advertencia'>('info'); // Estado para alternar entre abas

  useEffect(() => {
    if (data) {
      onSetNome(data.Nome); // Atualiza o nome do funcionário no componente pai
    }
  }, [data, onSetNome]); // Adiciona onSetNome como dependência para evitar warnings

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados do funcionário. Por favor, tente novamente mais tarde.</p>;
  }

  if (!data) {
    return <p>Nenhum dado encontrado para o funcionário.</p>;
  }


  return (
    <Container>
        <Tabs>
        <TabButton
          active={activeTab === 'info'}
          onClick={() => setActiveTab('info')}
        >
          Informações Importantes
        </TabButton>
        <TabButton
          active={activeTab === 'ocorrencias'}
          onClick={() => setActiveTab('ocorrencias')}
        >
          Ocorrências
        </TabButton>
        <TabButton
          active={activeTab === 'advertencia'}
          onClick={() => setActiveTab('advertencia')}
        >
          Advertencias
        </TabButton>

      </Tabs>
      <div className="w-100 d-flex-center">
        <ProfileCard>
          <TabContent>
            {activeTab === 'info' && (
              <InfoGroup>
                <InfoRow>
                  <span>CPF:</span>
                  <span>{data.Cpf}</span>
                </InfoRow>
                <InfoRow>
                  <span>PIS:</span>
                  <span>{data.NumeroPis || 'Não informado'}</span>
                </InfoRow>
                <InfoRow>
                  <span>Departamento:</span>
                  <span>{data.Departamento?.Descricao || 'Não informado'}</span>
                </InfoRow>
                <InfoRow>
                  <span>Função:</span>
                  <span>{data.Funcao?.Descricao || 'Não informado'}</span>
                </InfoRow>
                <InfoRow>
                  <span>Horário:</span>
                  <span>{data.Horario?.Descricao || 'Não informado'}</span>
                </InfoRow>
                <InfoRow>
                  <span>Admissão:</span>
                  <span>{new Date(data.Admissao).toLocaleDateString()}</span>
                </InfoRow>
                <InfoRow>
                  <span>Demissão:</span>
                  <span>{data.Demissao ? new Date(data.Demissao).toLocaleDateString() : 'Ativo'}</span>
                </InfoRow>
              </InfoGroup>
            )}
            {activeTab === 'ocorrencias' && (
              <InfoGroup>
                {data.ocorrencias?.length > 0 ? (
                  data.ocorrencias.map((ocorrencia) => (
                    <InfoRow key={ocorrencia.id}>
                      <span>Data:</span>
                      <span>{new Date(ocorrencia.data).toLocaleDateString()}</span>
                      <span>Tipo:</span>
                      <span>{ocorrencia.tipo}</span>
                      {ocorrencia.horarioEsperado &&(
                        <>
                          <span>Horário Esperado:</span>
                          <span>{ocorrencia.horarioEsperado}</span>
                        </>
                      )}
                      {ocorrencia.horarioBatido && (
                        <>
                          <span>Horário Batido:</span>
                          <span>{ocorrencia.horarioBatido || 'Não registrado'}</span>
                        </>
                      )}
                      <span>Justificativa:</span>
                      <span>❌</span>
                      <OutlinedButton>Justificar</OutlinedButton>
                    </InfoRow>

                  ))
                ) : (
                  <p>Nenhuma ocorrência registrada.</p>
                )}
              </InfoGroup>
            )}
            {activeTab == 'advertencia' && (
              <div className="w-50 d-flex-center flex-column">
                <Button onClick={handleNewAdvertencia}>Nova Advertencia</Button>
              </div>
              
            )}
          </TabContent>
        </ProfileCard>
      </div>
    </Container>
  );
}