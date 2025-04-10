import Layout from '@/components/DefaultLayout';
import Jornada from '@/views/Jornadas/detail';
import { useState } from 'react';

export default function JornadasPage() {
  const [nome, setNome] = useState("");

  return (
    <Layout title={`Funcionário: ${nome}`}>
      <Jornada onSetNome={setNome} />
    </Layout>
  );
}