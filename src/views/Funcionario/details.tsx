import React from 'react';
import { Container, ProfileCard, InfoGroup, InfoRow } from './styles';

interface FuncionarioDetailsProps {
  funcionario: {
    nome: string;
    email?: string | null;
    Cpf: string;
    carteira: string;
    departamento: { Id: number; Descricao: string };
    funcao: { Id: number; Descricao: string };
    horario: { Id: number; Descricao: string };
    admissao: string;
    demissao?: string | null;
    telefone?: string | null;
    endereco?: string | null;
    cep?: string | null;
    cidade?: string | null;
    uf?: string | null;
  };
}

export default function FuncionarioDetails({ funcionario }: FuncionarioDetailsProps) {
  return (
    <Container>
      <ProfileCard>
        <div className="profile-header">
          <h2 className='p-2'>{funcionario.nome}</h2>
        </div>
        <InfoGroup>
          <InfoRow>
            <span>CPF:</span>
            <span>{funcionario.Cpf}</span>
          </InfoRow>
          <InfoRow>
            <span>Carteira:</span>
            <span>{funcionario.carteira}</span>
          </InfoRow>
          <InfoRow>
            <span>Departamento:</span>
            <span>{funcionario.departamento?.Descricao || 'Departamento não informado'}</span>
          </InfoRow>
          <InfoRow>
            <span>Função:</span>
            <span>{funcionario.funcao?.Descricao || 'Função não informada'}</span>
          </InfoRow>
          <InfoRow>
            <span>Horário:</span>
            <span>{funcionario.horario?.Descricao || 'Horário não informado'}</span>
          </InfoRow>
          <InfoRow>
            <span>Admissão:</span>
            <span>{new Date(funcionario.admissao).toLocaleDateString()}</span>
          </InfoRow>
          <InfoRow>
            <span>Demissão:</span>
            <span>{funcionario.demissao ? new Date(funcionario.demissao).toLocaleDateString() : 'Ativo'}</span>
          </InfoRow>
          <InfoRow>
            <span>Telefone:</span>
            <span>{funcionario.telefone || 'Não informado'}</span>
          </InfoRow>
          <InfoRow>
            <span>Endereço:</span>
            <span>{funcionario.endereco || 'Não informado'}</span>
          </InfoRow>
          <InfoRow>
            <span>CEP:</span>
            <span>{funcionario.cep || 'Não informado'}</span>
          </InfoRow>
          <InfoRow>
            <span>Cidade:</span>
            <span>{funcionario.cidade || 'Não informado'}</span>
          </InfoRow>
          <InfoRow>
            <span>UF:</span>
            <span>{funcionario.uf || 'Não informado'}</span>
          </InfoRow>
        </InfoGroup>
      </ProfileCard>
    </Container>
  );
}