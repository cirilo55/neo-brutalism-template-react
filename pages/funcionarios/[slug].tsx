import Layout from '@/components/DefaultLayout';
import FuncionarioDetails from '@/views/Funcionarios/detail';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function JornadasPage() {
  const [nome, setNome] = useState("");
  const router = useRouter();

  const handleReturn = () => {
    router.push('/funcionarios');
  };

  return (
    <Layout title={`Funcionário: ${nome}`} onBack={handleReturn}>
      <FuncionarioDetails onSetNome={setNome}/>
    </Layout>
  );
}