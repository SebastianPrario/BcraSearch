import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';
import { Trash2, User as UserIcon, Plus } from 'lucide-react';

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-main);
  
  span {
    font-weight: bold;
  }
`;

const CapacityBadge = styled.span`
  background: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const FormCard = styled.div`
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const InputGroup = styled.div`
  flex: 1;
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
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: var(--primary-color);
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ListContainer = styled.div`
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  overflow: hidden;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(0,0,0,0.02);
  }
`;

const CuitInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  .cuit {
    font-weight: bold;
    color: var(--text-main);
  }
  
  .razon-social {
    font-size: 0.9rem;
    color: var(--text-muted);
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 77, 77, 0.1);
  }
`;

const EmptyState = styled.div`
  padding: 3rem;
  text-align: center;
  color: var(--text-muted);
`;

interface CuitRecord {
    cuit: string;
    razonSocial: string;
}

export default function Dashboard() {
    const { user } = useAuth();
    const [cuits, setCuits] = useState<CuitRecord[]>([]);
    const [newCuit, setNewCuit] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetchCuits();
    }, []);

    const fetchCuits = async () => {
        setLoading(true);
        try {
            const response = await api.get('/user/cuits');
            setCuits(response.data);
        } catch (error) {
            console.error('Error fetching cuits:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCuit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCuit || isAdding) return;

        if (cuits.length >= (user?.capacity || 0)) {
            alert('Has alcanzado el límite de CUITs permitidos.');
            return;
        }

        setIsAdding(true);
        try {
            const response = await api.post('/user/cuits', { cuit: newCuit });
            setCuits([...cuits, response.data]);
            setNewCuit('');
        } catch (error) {
            alert('Error al agregar CUIT');
        } finally {
            setIsAdding(false);
        }
    };

    const handleDeleteCuit = async (cuit: string) => {
        if (!confirm('¿Estás seguro de que deseas eliminar este CUIT?')) return;

        try {
            await api.delete(`/user/cuits/${cuit}`);
            setCuits(cuits.filter(c => c.cuit !== cuit));
        } catch (error) {
            alert('Error al eliminar CUIT');
        }
    };

    return (
        <>
            <NavBar />
            <DashboardContainer>
                <Header>
                    <UserInfo>
                        <UserIcon size={24} />
                        <div>
                            <span>{user?.email}</span>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Panel de Control</div>
                        </div>
                    </UserInfo>
                    <CapacityBadge>
                        Límite: {cuits.length} / {user?.capacity}
                    </CapacityBadge>
                </Header>

                <FormCard>
                    <Form onSubmit={handleAddCuit}>
                        <InputGroup>
                            <Label>Agregar Nuevo CUIT</Label>
                            <Input
                                type="text"
                                value={newCuit}
                                onChange={(e) => setNewCuit(e.target.value)}
                                placeholder="20123456789"
                                maxLength={11}
                            />
                        </InputGroup>
                        <Button type="submit" disabled={isAdding || !newCuit || cuits.length >= (user?.capacity || 0)}>
                            <Plus size={20} />
                            Agregar
                        </Button>
                    </Form>
                </FormCard>

                <ListContainer>
                    {loading ? (
                        <EmptyState>Cargando registros...</EmptyState>
                    ) : cuits.length > 0 ? (
                        cuits.map((item) => (
                            <ListItem key={item.cuit}>
                                <CuitInfo>
                                    <span className="cuit">{item.cuit}</span>
                                    <span className="razon-social">{item.razonSocial}</span>
                                </CuitInfo>
                                <DeleteButton onClick={() => handleDeleteCuit(item.cuit)}>
                                    <Trash2 size={20} />
                                </DeleteButton>
                            </ListItem>
                        ))
                    ) : (
                        <EmptyState>No tienes CUITs registrados aún.</EmptyState>
                    )}
                </ListContainer>
            </DashboardContainer>
        </>
    );
}
