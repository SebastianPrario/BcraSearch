import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';

const AccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
`;

const LoginForm = styled.form`
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--border-color);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-main);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-input);
  color: var(--text-main);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  background: var(--primary-color, #007bff);
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
`;

export default function Access() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            //const response = await api.post('/auth/login', { email, password });
            //const { token, user } = response.data;
            const token = '00001'
            const user = { email: 'test@test.com', capacity: 10 }
            // user object should contain email and capacity (cantidad de cuit permitidos)
            login(user.email, user.capacity, token);
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Error al iniciar sesión. Verifique sus credenciales.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <AccessContainer>
                <LoginForm onSubmit={handleSubmit}>
                    <Title>Acceso Usuarios</Title>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Contraseña</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            required
                        />
                    </FormGroup>
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </Button>
                    {error && <ErrorMsg>{error}</ErrorMsg>}
                </LoginForm>
            </AccessContainer>
        </>
    );
}
