import styled from 'styled-components';
import { StyledCard } from './styled-components';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQItem = styled.div`
  border-bottom: 1px solid var(--glass-border);
  padding: 1.25rem 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: var(--text-main);
  font-weight: 700;
  font-size: 1.1rem;
  text-align: left;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-dim);
  font-size: 1rem;
  line-height: 1.6;
  margin-top: ${props => props.isOpen ? '1rem' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
`;

const faqs = [
    {
        question: "¿Qué es la Central de Deudores del BCRA?",
        answer: "Es un registro gestionado por el Banco Central de la República Argentina que consolida la información de préstamos y deudas de personas y empresas en el sistema financiero argentino. Las clasificaciones van del 1 (situación normal) al 6 (irrecuperable)."
    },
    {
        question: "¿Cómo puedo consultar si tengo cheques rechazados?",
        answer: "Simplemente ingresa tu número de CUIT o CUIL en nuestro buscador. El reporte te mostrará de forma gratuita si existen cheques rechazados por falta de fondos, defectos formales u otras causales en los últimos 24 meses."
    },
    {
        question: "¿Qué significa la situación crediticia 1, 2, 3, 4 o 5?",
        answer: "Situación 1: Normal (atraso hasta 31 días). Situación 2: Seguimiento especial (atraso de 31 a 90 días). Situación 3: Problemas (atraso de 90 a 180 días). Situación 4: Alto riesgo de insolvencia (atraso de 180 a 365 días). Situación 5: Irrecuperable (atraso mayor a un año)."
    },
    {
        question: "¿La información es oficial?",
        answer: "Sí, los datos provienen directamente de las APIs públicas del Banco Central de la República Argentina (BCRA). Nuestra herramienta facilita la visualización y el acceso a esta información de manera gratuita y rápida."
    },
    {
        question: "¿Qué otras deudas aparecen en la Central de Deudores?",
        answer: "Además de préstamos bancarios, el informe incluye deudas por tarjetas de crédito, fideicomisos financieros, entidades no financieras emisoras de tarjetas, sociedades de garantía recíproca y otros proveedores de crédito registrados ante el BCRA."
    },
    {
        question: "¿Qué debo hacer si hay un error en mi informe?",
        answer: "Si detectas información incorrecta, debes iniciar el reclamo directamente ante la entidad financiera que reportó el dato. El BCRA solo consolida la información recibida de los bancos; una vez que la entidad rectifique el error, la actualización impactará automáticamente en la Central de Deudores."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <StyledCard className="mt-5 mb-5 overflow-visible">
            <div className="card-header d-flex align-items-center gap-3">
                <div style={{ background: 'rgba(var(--primary-rgb), 0.1)', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>
                    <HelpCircle size={24} />
                </div>
                <div>
                    <h5 className="mb-0">Preguntas Frecuentes (FAQ)</h5>
                    <small>Información útil sobre consultas financieras en Argentina</small>
                </div>
            </div>
            <div className="card-body">
                {faqs.map((faq, index) => (
                    <FAQItem key={index}>
                        <Question onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {faq.question}
                            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </Question>
                        <Answer isOpen={openIndex === index}>
                            {faq.answer}
                        </Answer>
                    </FAQItem>
                ))}
            </div>
        </StyledCard>
    );
};
