import axios from 'axios';
import React from 'react'
import type { Data } from '../../types/api'




export default function UseFech() {
    const [data, setData] = React.useState<Data | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");

    const fetchWithRetry = async (url: string, retries = 2, delay = 500) => {
        for (let i = 0; i <= retries; i++) {
            try {
                return await axios.get(url, {
                    headers: {
                        'Accept': 'application/json',
                    },
                    timeout: 15000 // Aumentamos a 15s
                });
            } catch (err: unknown) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const error = err as any;
                const isNetworkError = !error.response || error.code === 'ECONNABORTED' || error.message?.includes('network error');
                if (i === retries || !isNetworkError) throw err;
                
                console.warn(`Intento ${i + 1} fallido para ${url}, reintentando en ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    };

    const fetchData = async (cuit: string) => {
        const url = `${import.meta.env.VITE_API_URL_ENTIDADES}${cuit}`;
        const url2 = `${import.meta.env.VITE_API_URL_CHEQUESRECHAZADOS}${cuit}`;
        setLoading(true);
        setError("");
        setData(null);

        try {
            // Ejecutamos la primera consulta
            const deudaPromise = fetchWithRetry(url);
            
            // Agregamos un pequeño delay de 300ms antes de la segunda para no saturar la conexión inicial
            await new Promise(resolve => setTimeout(resolve, 300));
            const chequesPromise = fetchWithRetry(url2);

            const [deudaResult, chequesRechazadosResult] = await Promise.allSettled([
                deudaPromise,
                chequesPromise
            ]);
          
            if (deudaResult.status === 'fulfilled') {
                setData({ 
                    deuda: deudaResult.value?.data.results, 
                    chequesRechazados: null 
                });
            }

            if (chequesRechazadosResult.status === 'fulfilled') {
                setData((prevData) => ({
                    ...prevData,
                    chequesRechazados: chequesRechazadosResult.value?.data.results
                }));
            }

            if (deudaResult.status === 'rejected' && chequesRechazadosResult.status === 'rejected') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const errorDeuda = (deudaResult.reason as any)?.message || "";
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const errorCheques = (chequesRechazadosResult.reason as any)?.message || "";
                console.error("Ambas consultas fallaron:", { errorDeuda, errorCheques });
                setError("Error al obtener los datos de BCRA. Por favor intente nuevamente.");
                setData({
                    deuda: null,
                    chequesRechazados: null
                });
            }

        } catch (err) {
            console.error("Error inesperado en fetchData:", err);
            setError("Error al procesar la solicitud");
        } finally {
            setLoading(false);
        }
    };

    return {
        data, setData, error, setError, loading, setLoading, fetchData
    }
}
