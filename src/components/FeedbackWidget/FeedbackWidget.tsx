import { useState } from 'react'
import { MessageSquare, Star, Send, Check } from 'lucide-react'
import { StyledFeedbackWidget, FeedbackButton, FeedbackCard, StyledButton } from '../styled-components'
import emailjs from '@emailjs/browser'

export default function FeedbackWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [isSent, setIsSent] = useState(false)
    const [isSending, setIsSending] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSending(true)

        const templateParams = {
            rating: rating,
            message: comment,
            to_email: 'chequesrechazados@icloud.com'
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );

            setIsSent(true)
            setTimeout(() => {
                setIsOpen(false)
                setIsSent(false)
                setRating(0)
                setComment('')
            }, 3000)
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Hubo un error al enviar el feedback. Por favor, intenta más tarde.');
        } finally {
            setIsSending(false)
        }
    }

    return (
        <StyledFeedbackWidget>
            <FeedbackButton onClick={() => setIsOpen(!isOpen)}>
                <MessageSquare size={24} />
            </FeedbackButton>

            {isOpen && (
                <FeedbackCard>
                    {isSent ? (
                        <div className="text-center py-4">
                            <Check size={48} className="text-success mb-2" />
                            <h6>¡Gracias por tu mensaje!</h6>
                            <p className="text-muted small">Tu opinión nos ayuda a mejorar.</p>
                        </div>
                    ) : (
                        <>
                            <h6>Danos tu opinión</h6>
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        fill={star <= rating ? '#fbbf24' : 'none'}
                                        onClick={() => setRating(star)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <textarea
                                    placeholder="¿Cómo podemos mejorar?"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                    disabled={isSending}
                                />
                                <StyledButton type="submit" className="w-100" disabled={!rating || !comment || isSending}>
                                    {isSending ? (
                                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                                    ) : (
                                        <Send size={16} className="me-2" />
                                    )}
                                    {isSending ? 'Enviando...' : 'Enviar Feedback'}
                                </StyledButton>
                            </form>
                        </>
                    )}
                </FeedbackCard>
            )}
        </StyledFeedbackWidget>
    )
}
