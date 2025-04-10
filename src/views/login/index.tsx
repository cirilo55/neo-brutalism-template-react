import React, { useState, useEffect } from 'react';
import { Container, Form, Title, InputGroup, Row } from './styles';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { getLogin } from '@/api/auth';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Checkbox from '@/components/CheckBox';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberLogin, setRememberLogin] = useState(false); // Estado para lembrar o login

    const router = useRouter();

    useEffect(() => {
        const savedEmail = localStorage.getItem('lastLogin');
        if (savedEmail) {
          setEmail(savedEmail);
          setRememberLogin(true); // Marca o checkbox como ativo se houver um email salvo
        }
      }, []);

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          // Simula a chamada de login (substitua pela sua lógica de autenticação)
          const response = await getLogin({ email, password });
    
          if (rememberLogin) {
            localStorage.setItem('lastLogin', email);
          } else {
            localStorage.removeItem('lastLogin'); // Remove o email se o usuário desmarcar
          }
    
          // Salva o token nos cookies
          document.cookie = `authToken=${response.token}; path=/;`;
    
          // Redireciona para a página inicial
          router.push('/');
          toast.success('Login realizado com sucesso!');
        } catch (error) {
          console.error('Erro ao autenticar:', error);
          toast.error('Credenciais inválidas ou erro no servidor.');
        } finally {
          setLoading(false);
        }
      };
    

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Login</Title>
                <InputGroup>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite seu email'
                        label="Email"
                        isLoading={loading}
                        autoComplete="email"

                        
                    />
                </InputGroup>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder='Digite sua senha'
                        label="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isLoading={loading}
                        autoComplete="current-password"


                    />
                </InputGroup>
                <Row>
                    <Checkbox
                        checked={rememberLogin}
                        onChange={(e) => setRememberLogin(e.target.checked)}
                        label="Lembrar Login"
                    />
                </Row>
                <Row>
                    <Button
                    isLoading={loading}
                    >Login</Button>
                </Row>
            </Form>
        </Container>
    );
};