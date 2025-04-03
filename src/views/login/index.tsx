import React, { useState } from 'react';
import { Container, Form, Title, InputGroup, Row } from './styles';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
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