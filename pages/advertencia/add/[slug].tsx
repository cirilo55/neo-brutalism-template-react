import Layout from '@/components/DefaultLayout';
import AdvertenciaAdd from '@/views/Advertencia/add';

export default function AdvertenciaAddPage() {
//   const [nome, setNome] = useState("");
//   const router = useRouter();


  return (
    <Layout title={`Nova Advertencia`}>
        <AdvertenciaAdd />
    </Layout>
  );
}