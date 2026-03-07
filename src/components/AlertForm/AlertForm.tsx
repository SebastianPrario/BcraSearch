import React, { useState } from 'react';
import { StyledCard, StyledInput, StyledButton } from '../styled-components';
import { Bell, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';

interface AlertFormProps {
    cuit: string;
}

export const AlertForm: React.FC<AlertFormProps> = ({ cuit }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        try {
            // In a real app, this token would be in process.env.VITE_ALERT_TOKEN
            // For this implementation, I'll use the one we set in the backend .env
            const token = import.meta.env.VITE_ALERT_TOKEN;
            await axios.post(import.meta.env.VITE_API_ALERT_URL + '/alerts/subscribe', {
                email,
                cuit,
            }, {
                headers: {
                    'x-alert-token': token
                }
            });

            setStatus('success');
            setMessage('¡Suscripción exitosa! Te avisaremos si hay cambios.');
            setEmail('');
        } catch (error: any) {
            setStatus('error');
            setMessage(error.response?.data?.message || 'Error al suscribirse. Intente nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (status === 'success') {
        return (
            <StyledCard className="mt-4 border-success" style={{ background: 'rgba(25, 135, 84, 0.05)' }}>
                <div className="card-body text-center py-4">
                    <CheckCircle2 size={48} className="text-success mb-3" />
                    <h5 className="text-success">{message}</h5>
                    <p className="text-muted mb-0">Recibirás un mail semanalmente solo si detectamos cambios.</p>
                </div>
            </StyledCard>
        );
    }

    return (
        <StyledCard className="mt-4">
            <div className="card-header d-flex align-items-center gap-3">
                <div style={{ background: 'rgba(var(--primary-rgb), 0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>
                    <Bell size={24} />
                </div>
                <div>
                    <h5 className="mb-0">Alertas de Cambio de Situación</h5>
                    <small>Te avisamos por mail si tu situación cambia en el BCRA</small>
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="alert-email" className="form-label fw-bold" style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>
                            Correo Electrónico
                        </label>
                        <StyledInput
                            type="email"
                            id="alert-email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {status === 'error' && (
                        <div className="alert alert-danger d-flex align-items-center gap-2 py-2">
                            <AlertCircle size={18} />
                            <small>{message}</small>
                        </div>
                    )}

                    <StyledButton type="submit" disabled={loading || !email} className="w-100">
                        {loading ? 'Procesando...' : 'Activar Alerta semanal'}
                    </StyledButton>
                    <p className="text-center mt-3 mb-0" style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                        Solo permitimos un CUIT por correo. Las alertas se envían cada semana.
                    </p>
                </form>
            </div>
        </StyledCard>
    );
};
