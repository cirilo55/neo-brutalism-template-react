import React, { useState } from 'react';
import { Container, Form, Title, InputGroup, Row } from './styles';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { getLogin } from '@/api/auth';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const response = await getLogin({ email, password });
          document.cookie = `authToken=${response.token}; path=/;`;
        
          router.push('/');
          toast.success('Login realizado com sucesso!')
        } catch (error) {
          console.error('Erro ao autenticar:', error);
          toast.error('Credenciais inválidas ou erro no servidor.')
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
                        
                    />
                </InputGroup>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder='Digite sua senha'
                        label="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>
                <Row>
                    <Button>Login</Button>
                </Row>
            </Form>
        </Container>
    );
};