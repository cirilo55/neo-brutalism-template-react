import Layout from '@/components/DefaultLayout';
import Jornada from '@/views/Jornadas/detail';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function JornadasPage() {
  const [nome, setNome] = useState("");
  const router = useRouter();

  const handleReturn = () => {
    router.push('/jornadas');
  };

  return (
    <Layout title={`Funcionário: ${nome}`} onBack={handleReturn}>
      <Jornada onSetNome={setNome} />
    </Layout>
  );
}