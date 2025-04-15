import React, { useState } from 'react';
import ComboInput from '@/components/ComboInput';
import Input from '@/components/Input';
import { FormWrapper, FormSection, FormGroup } from './styles';
import Button from '@/components/Button';
import TextBox from '@/components/TextBox';
import { getFuncionarioCombo } from '@/api/funcionarios';
import useSWR from 'swr';

export default function AdvertenciaAdd() {
  const [formData, setFormData] = useState({
    funcionarioId: '',
    motivo: '',
    dataInicio: '',
    dataFim: '',
    observacao: '',
  });

    const { data, isLoading } = useSWR('/funcionarios/combo', getFuncionarioCombo, {
    })
    console.log(data)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <FormWrapper>
      <FormSection onSubmit={handleSubmit}>
        {/* Funcionário e Motivo na mesma linha */}
        <FormGroup style={{ display: 'flex', gap: '16px' }}>
            <ComboInput
              label="Funcionário"
              value={formData.funcionarioId}
              onChange={(e) => setFormData({ ...formData, funcionarioId: e.target.value })}
              options={
                isLoading
                  ? [{ value: '', label: 'Carregando...' }]
                  : data
              }            />
        </FormGroup>

        <FormGroup>
        <ComboInput
              label="Motivo"
              value={formData.motivo}
              onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
              options={[
                { value: 'Falta', label: 'Falta' },
                { value: 'Atraso', label: 'Atraso' },
                { value: 'Conduta', label: 'Conduta' },
                { value: 'Outros', label: 'Outros' },
              ]}
            />
        </FormGroup>

        {/* Data de Início e Data de Término na mesma linha */}
        <FormGroup>
            <Input
              label="Data de Início"
              type="date"
              value={formData.dataInicio}
              onChange={(e) => setFormData({ ...formData, dataInicio: e.target.value })}
            />

            <Input
              label="Data de Término"
              type="date"
              value={formData.dataFim}
              onChange={(e) => setFormData({ ...formData, dataFim: e.target.value })}
            />
        </FormGroup>

        <FormGroup>
          <TextBox
            label="Observação"
            value={formData.observacao}
            onChange={(e) => setFormData({ ...formData, observacao: e.target.value })}
            placeholder="Digite uma observação (opcional)"
          />
        </FormGroup>

        <Button>Salvar Advertência</Button>
      </FormSection>
    </FormWrapper>
  );
}